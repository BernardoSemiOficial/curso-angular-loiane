import { Injectable } from '@angular/core';
import { Alunos } from '../models/alunos.models';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Alunos[] = [
    { id: 1, name: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, name: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, name: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() {}

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    return this.alunos.find((aluno) => aluno.id === id);
  }
}
