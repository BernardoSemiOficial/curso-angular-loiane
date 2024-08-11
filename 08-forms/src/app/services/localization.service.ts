import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  validateAndGetAddress(cep: string): Observable<LocalizationBrazil> {
    if (!cep) {
      throw new Error('CEP is required');
    }
    const cepCleaded = cep.replace(/\D/g, '');
    const cepValidRegex = /^\d{8}$/;
    const isCepValid = cepValidRegex.test(cepCleaded);

    if (!isCepValid) {
      throw new Error('CEP invalid');
    }

    return this.getAddressInfo(cepCleaded);
  }
}
