import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunosDeactiveGuard } from '../../guards/alunos-deactive.guard';
import { AlunosGuard } from '../../guards/alunos.guard';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './components/aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';
import { AlunoDetalheResolve } from './guards/aluno-detalhe.resolve';

@NgModule({
  declarations: [AlunosComponent, AlunoDetalheComponent, AlunoFormComponent],
  imports: [CommonModule, FormsModule, AlunosRoutingModule],
  providers: [AlunosGuard, AlunosDeactiveGuard, AlunoDetalheResolve],
})
export class AlunosModule {}
