import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
