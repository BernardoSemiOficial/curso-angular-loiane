import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cursos',
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('../modules/cursos/cursos.routes').then((c) => c.CURSOS_ROUTES),
  },
];
