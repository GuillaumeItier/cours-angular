import { inject, Service } from '@angular/core';
import {
  Database,
  DatabaseReference,
  get,
  push,
  ref,
  remove,
  set,
  update,
} from '@angular/fire/database';
import { Task } from '../models/task.model';

@Service()
export class TaskPromiseService {

  private readonly db = inject(Database);
   // Référence typée vers le nœud "tasks" de Firebase Realtime Database
  private readonly tasksRef: DatabaseReference = ref(this.db, 'tasks');

    // Récupérer une fois la liste des tâches
  async getTasks(): Promise<Task[]> {
    const snapshot = await get(this.tasksRef);
    const data = snapshot.val() as Record<string, Omit<Task, 'id'>> | null;
    if (!data) {
      return [];
    }
    return Object.entries(data).map(([id, task]) => ({ id, ...task, }));
  }

    // Ajouter une tâche (Firebase génère l'ID via push)
  async addTask(task: Omit<Task, 'id'>): Promise<void> {
    const newTaskRef = push(this.tasksRef);
    await set(newTaskRef, task);
  }

    // Supprimer une tâche
  async deleteTask(taskId: string): Promise<void> {
    if (!taskId) {
      throw new Error('L’ID de la tâche est obligatoire pour la suppression.');
    }
    const taskRef = ref(this.db, `tasks/${taskId}`);
    await remove(taskRef);
  }

   // Mettre à jour une tâche existante
  async updateTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error('La tâche doit avoir un ID pour être mise à jour.');
    }
    const { id, ...taskData } = task;
    const taskRef = ref(this.db, `tasks/${id}`);
    await update(taskRef, taskData);
  }

}