import { Routes } from '@angular/router';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';

export const CURSOS_ROUTES: Routes = [
  {
    path: '',
    component: CursosListaComponent,
  },
];
