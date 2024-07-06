import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from '../../guards/alunos.guard';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './components/aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';

const routes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
