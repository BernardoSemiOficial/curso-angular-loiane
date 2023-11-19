import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule],
  // providers: [CursosService],
  exports: [CursosComponent],
})
export class CursosModule {}
