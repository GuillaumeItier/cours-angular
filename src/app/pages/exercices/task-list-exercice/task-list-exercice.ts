import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { TaskPromiseService } from '../../../services/task-promise.service';

@Component({
  imports: [FormsModule],
  selector: 'app-task-list-exercice',
  styleUrl: './task-list-exercice.css',
  templateUrl: './task-list-exercice.html',
})
export class TaskListExercice implements OnInit{
  private readonly taskPromise = inject(TaskPromiseService);

  protected taskList = signal<Task[]>([]);
  protected taskName = signal<string>('');
  protected isLoading = signal<boolean>(false);
  protected errorMessage = signal<string>('');
  protected isSaving = signal<boolean>(false);

  async ngOnInit(): Promise<void> {
    await this.loadTasks();
  }

  // CHARGER LES TÂCHES
  async loadTasks(): Promise<void> {
    try {
      if (this.taskList().length === 0) {
        this.isLoading.set(true);
      }
      this.errorMessage.set('');
      const tasks = await this.taskPromise.getTasks();
      this.taskList.set(tasks);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
      this.errorMessage.set("Impossible de charger les tâches.");
    } finally {
      this.isLoading.set(false);
    }
  }

  //AJOUTER UNE TACHE
  async addTask(): Promise<void> {
    const title = this.taskName().trim();
    if (!title) return;

    try {
      this.errorMessage.set('');
      this.isSaving.set(true);
      const newTask: Omit<Task, 'id'> = { title, status: 'pending' };
      await this.taskPromise.addTask(newTask);
      this.taskName.set('');
      await this.loadTasks();

    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la tâche : ", error);
      this.errorMessage.set("Erreur lors de l'enregistrement de la tâche.");
    } finally {
    this.isSaving.set(false);
  }
  }

  //METTRE A JOUR UNE TACHE
  async toggleStatusTask(task: Task): Promise<void>{
    const updatedTask : Task = { ...task, 'status' : task.status == 'pending' ? 'completed' : 'pending' };
    try {
      this.errorMessage.set(''); 
      this.isSaving.set(true);
      await this.taskPromise.updateTask(updatedTask);
      await this.loadTasks();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut : ", error);
      const message = error instanceof Error 
        ? error.message 
        : "Une erreur est survenue lors de la mise à jour du status. Veuillez réessayer ou vérifier votre réseau .";
      this.errorMessage.set(message);
    } finally {
    this.isSaving.set(false);
  }
  }

  //SUPPRIMER UNE TACHE
  async deleteTask(taskId?: string): Promise<void> {
    if (!taskId) return;
    try {
      this.errorMessage.set("");
      this.isSaving.set(true);
      await this.taskPromise.deleteTask(taskId);
      await this.loadTasks();
    
    } catch(error){
      console.error("Erreur lors de la suppression de la tâche :", error);
      const message = error instanceof Error 
        ? error.message
        : "Une erreur est survenue lors de la suppression. Veuillez réessayer ou vérifier votre réseau.";
        this.errorMessage.set(message);
    } finally {
    this.isSaving.set(false);
  }

  }
}
  