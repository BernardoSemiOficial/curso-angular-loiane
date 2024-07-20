import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../../models/alunos.models';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit {
  alunoId!: number;
  aluno!: Aluno | null;
  subscriptionRoute!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.subscriptionRoute = this.route.paramMap.subscribe((params) => {
    //   const id = params.get('id');
    //   this.alunoId = Number(id);
    //   this.aluno = this.alunosService.getAluno(this.alunoId) ?? null;
    // });

    this.route.data.subscribe((data: Data) => {
      const { aluno } = data as { aluno: Aluno };
      this.aluno = aluno;
    });
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }

  goToPageEdit() {
    this.router.navigate(['alunos', this.alunoId, 'editar']);
  }
}
