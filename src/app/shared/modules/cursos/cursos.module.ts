import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosService } from '../../services/cursos/cursos.service';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './components/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [CommonModule, CursosRoutingModule],
  providers: [CursosService],
})
export class CursosModule {}
