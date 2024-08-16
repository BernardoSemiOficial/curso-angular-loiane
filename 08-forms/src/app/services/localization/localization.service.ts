import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export type LocalizationBrazil = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type StateBrazil = {
  id: number;
  sigla: string;
  nome: string;
};

export type CitiesBrazil = {
  id: number;
  estado: string;
  nome: string;
};

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private http: HttpClient = inject(HttpClient);

  getAddressInfo(cep: string): Observable<LocalizationBrazil> {
    return this.http.get<LocalizationBrazil>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
  }

  getStatesBrazil(): Observable<StateBrazil[]> {
    return this.http.get<StateBrazil[]>('assets/states/brazil.json');
  }

  getCitiesBrazil(stateId: number): Observable<CitiesBrazil[]> {
    return this.http
      .get<CitiesBrazil[]>('assets/cities/brazil.json')
      .pipe(
        map((cities) =>
          cities.filter((city) => city.estado === stateId.toString())
        )
      );
  }

  validateAndGetAddress(cep: string): Observable<LocalizationBrazil> {
    if (!cep) return of({} as LocalizationBrazil);
    const cepCleaded = cep.replace(/\D/g, '');
    const cepValidRegex = /^\d{8}$/;
    const isCepValid = cepValidRegex.test(cepCleaded);
    if (!isCepValid) return of({} as LocalizationBrazil);
    return this.getAddressInfo(cepCleaded);
  }
}
