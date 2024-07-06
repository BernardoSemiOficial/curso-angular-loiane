import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./shared/modules/alunos/alunos.module').then(
        (m) => m.AlunosModule
      ),
  },
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./shared/modules/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
