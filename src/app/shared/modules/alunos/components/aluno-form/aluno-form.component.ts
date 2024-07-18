import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormDeactivate } from 'src/app/shared/interfaces/form-deactivate';
import { Alunos } from '../../models/alunos.models';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements OnInit, FormDeactivate {
  alunoId!: number;
  aluno: Alunos = { id: 0, name: '', email: '' };
  alunoFormularioInicial: Alunos = { id: 0, name: '', email: '' };
  subscriptionRoute!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.subscriptionRoute = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.alunoId = Number(id);
      const isAlunExist = this.alunosService.getAluno(this.alunoId);
      if (isAlunExist) {
        this.aluno = { ...isAlunExist };
        this.alunoFormularioInicial = { ...isAlunExist };
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }

  podeMudarRota() {
    if (
      this.aluno.name !== this.alunoFormularioInicial.name ||
      this.aluno.email !== this.alunoFormularioInicial.email
    ) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
