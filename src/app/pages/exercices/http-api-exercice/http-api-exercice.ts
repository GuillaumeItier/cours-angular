import { Component, inject, signal } from '@angular/core';
import { Meteo } from '../../../services/meteo'; 
import type { MeteoResponse, ForecastDay } from '../../../models/meteo.model';


@Component({
  imports: [],
  selector: 'app-http-api-exercice',
  styleUrl: './http-api-exercice.css',
  templateUrl: './http-api-exercice.html',
})
export class HttpApiExercice {

  private readonly meteoService = inject(Meteo);

  readonly meteoData = signal<MeteoResponse | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selectedCity = signal<string>('toulouse');
  readonly quickCities: string[] = ['Toulouse', 'Paris', 'Lyon', 'Bordeaux', 'Genève'];
  readonly forecastDays = signal<ForecastDay[]>([]);


  selectCity(city: string): void {
    const cleanCity =  city
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');;
    if (!cleanCity) return;

    this.selectedCity.set(cleanCity); 
    this.fetchMeteo();                
  }

  fetchMeteo(): void {
    const city = this.selectedCity().trim();
    console.log('Réponse API :', city);
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.forecastDays.set([]);

    this.meteoService.getMeteoByCity(city).subscribe({
      next: (data) => {
        console.log('Réponse API :', data);
        if (!data.city_info) {
          this.errorMessage.set('Ville introuvable.');
          this.isLoading.set(false);
          return;
        }
        this.meteoData.set(data);
        this.isLoading.set(false);
        this.forecastDays.set([
         data.fcst_day_0,
         data.fcst_day_1,
         data.fcst_day_2,
         data.fcst_day_3,
         data.fcst_day_4,
       ]);
      },
      error: () => {
        this.errorMessage.set('Erreur lors du chargement de la météo.');
        this.isLoading.set(false);
      },
    });
  }

  ngOnInit(): void {
    this.fetchMeteo();
  }

}

