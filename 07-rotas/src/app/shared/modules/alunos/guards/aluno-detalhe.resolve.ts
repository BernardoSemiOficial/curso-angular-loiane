import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { Aluno } from '../models/alunos.models';
import { AlunosService } from '../services/alunos.service';

@Injectable()
export class AlunoDetalheResolve implements Resolve<Aluno | undefined> {
  constructor(private alunosService: AlunosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return of(this.alunosService.getAluno(Number(id)));
  }
}
