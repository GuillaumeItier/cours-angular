import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon, DigimonResponse, Pageable } from '../../../models/digimon.model';

@Component({
  imports: [],
  selector: 'app-api-httpclient-exercice',
  styleUrl: './api-httpclient-exercice.css',
  templateUrl: './api-httpclient-exercice.html',
})
export class ApiHttpclientExercice {

  private http = inject(HttpClient);

  digimons = signal<Digimon[]>([]);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string | null>(null);
  currentPage = signal<number>(0);
  totalPages = signal<number>(0);

  


  ngOnInit(){
    this.http.get<DigimonResponse>('https://digi-api.com/api/v1/digimon?page=0').subscribe({
      next: (response) => {
        this.digimons.set(response.content);
        this.currentPage.set(response.pageable.currentPage);
        this.totalPages.set(response.pageable.totalPages);
        this.isLoading.set(false);
      },
      error: (e) => {
        console.error(e);
        this.errorMessage.set('Erreur lors du chargement des Digimon.');
        this.isLoading.set(false);
      }
    });
  }

    goToPage(page: number) {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.http.get<DigimonResponse>(`https://digi-api.com/api/v1/digimon?page=${page}&pageSize=5`).subscribe({
      next: (response) => {
        this.digimons.set(response.content);     
        this.isLoading.set(false);
        this.currentPage.set(response.pageable.currentPage);
        this.totalPages.set(response.pageable.totalPages);
        console.log(this.currentPage(), this.totalPages());
      },
      error: (e) => {
        console.error(e);
        this.errorMessage.set('Erreur lors du chargement des Digimon.');
        this.isLoading.set(false);
      }
    });
  }
    previousPage() {
    if (this.currentPage() > 0) {
      this.goToPage(this.currentPage() - 1);
    }
  }

    nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.goToPage(this.currentPage() + 1);
    }
  }

}
