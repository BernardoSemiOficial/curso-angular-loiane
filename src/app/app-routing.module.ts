import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './shared/components/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './shared/components/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },
  { path: 'curso-params/', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
