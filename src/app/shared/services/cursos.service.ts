import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class CursosService {
  cursos: string[] = ['Angular', 'Typescript', 'JavaScript'];

  eventNewCurso = new EventEmitter<string>();
  static staticEventNewCurso = new EventEmitter<string>();

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    this.logService.consoleLog('Buscando todos os cursos...');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso chamado: ${curso}`);
    this.cursos.push(curso);
    this.eventNewCurso.emit(curso);
    CursosService.staticEventNewCurso.emit(curso);
  }
}
