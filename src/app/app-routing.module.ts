import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PaginaNaoEncontradaComponent } from './shared/components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CursosGuard } from './shared/guards/cursos.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./shared/modules/alunos/alunos.module').then(
        (m) => m.AlunosModule
      ),
  },
  {
    path: 'cursos',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    loadChildren: () =>
      import('./shared/modules/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
