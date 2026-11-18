import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeteoResponse } from '../models/meteo.model';


@Service()
export class Meteo {
    private readonly http = inject(HttpClient);



    getMeteoByCity(city: string): Observable<MeteoResponse> {
    return this.http.get<MeteoResponse>(`https://www.prevision-meteo.ch/services/json/${city}`);
    }
}
  