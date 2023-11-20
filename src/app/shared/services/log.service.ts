import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  consoleLog(message: string) {
    console.log(message);
  }
}
