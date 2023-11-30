import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alunos } from '../../models/alunos.models';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit {
  alunoId!: number;
  aluno!: Alunos | null;
  subscriptionRoute!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.subscriptionRoute = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.alunoId = Number(id);
      this.aluno = this.alunosService.getAluno(this.alunoId) ?? null;
    });
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }

  goToPageEdit() {
    this.router.navigate(['alunos', this.alunoId, 'editar']);
  }
}
