import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  getLocale() {
    return 'pt-BR';
  }
}
