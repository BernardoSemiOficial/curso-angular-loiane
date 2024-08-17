import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../../models/cursos.model';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos-lista.component.html',
})
export class CursosListaComponent {
  private cursosService: CursosService = inject(CursosService);
  cursos$: Observable<Curso[]> = this.cursosService.getCursos();

  deleteCurso(cursoId: number) {
    console.log(cursoId);
  }

  getCursos() {
    this.cursosService.getCursos().subscribe();
  }
}
