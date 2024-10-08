import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [CriarCursoComponent, ReceberCursoCriadoComponent],
  imports: [CommonModule],
  providers: [CursosService],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
