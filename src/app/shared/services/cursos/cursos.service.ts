import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cursos: { id: number; name: string }[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Javascript' },
  ];

  getCursos() {
    return this.cursos;
  }

  getCurso(id: number) {
    const cursoFind = this.cursos.find((curso) => curso.id === id);
    if (cursoFind) {
      return cursoFind;
    }
    return null;
  }
}
