import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  // providers: [CursosService],
})
export class CriarCursoComponent implements OnInit {
  cursos!: string[];

  constructor(private cursoService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  addNewCurso(curso: string) {
    this.cursoService.addCurso(curso);
  }
}
