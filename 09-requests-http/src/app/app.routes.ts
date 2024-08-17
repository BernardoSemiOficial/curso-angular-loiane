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
      import('./modules/cursos/cursos.routes').then((c) => c.CURSOS_ROUTES),
  },
  {
    path: 'unsubscribe-rxjs',
    loadChildren: () =>
      import('./modules/unsubscribe-rxjs/unsubscribe-rxjs.routes').then(
        (c) => c.UNSUBSCRIBEPOC_ROUTES
      ),
  },
];
