import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  // cursoService!: CursosService;

  constructor(private cursoService: CursosService) {
    /** CRIANDO UMA INSTÂNCIA DE FORMA MANUAL DO CursosService */
    // this.cursoService = _cursoService;
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    /** SE INSCREVENDO EM UM EVENTO ESTÁTICO EMITIDO PELO CursosService */
    CursosService.staticEventNewCurso.subscribe((curso) =>
      this.cursos.push(curso)
    );
  }
}
