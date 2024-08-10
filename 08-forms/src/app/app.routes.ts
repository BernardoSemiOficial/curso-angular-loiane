import { Routes } from '@angular/router';
import { DataDriveFormComponent } from './pages/data-drive-form/data-drive-form.component';
import { TemplateDriveFormComponent } from './pages/template-drive-form/template-drive-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'template-driven',
  },
  {
    path: 'template-driven',
    component: TemplateDriveFormComponent,
  },
  {
    path: 'data-driven',
    component: DataDriveFormComponent,
  },
];
