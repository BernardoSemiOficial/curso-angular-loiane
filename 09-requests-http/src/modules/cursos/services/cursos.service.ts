import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Curso } from '../models/cursos.model';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private http = inject(HttpClient);
  private readonly API_URL = `${environment.apiUrl}/cursos`;

  getCursos() {
    return this.http.get<Curso[]>(this.API_URL);
  }
}
