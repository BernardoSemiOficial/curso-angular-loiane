import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService],
})
export class CriarCursoComponent {
  constructor(private cursoService: CursosService) {}

  addNewCurso(curso: string) {
    this.cursoService.addCurso(curso);
  }
}
