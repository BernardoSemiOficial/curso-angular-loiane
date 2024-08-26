import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AlertModalComponent } from '../../../../shared/alert-modal/alert-modal.component';
import { Curso } from '../../models/cursos.model';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [CommonModule, RouterModule, AlertModalComponent],
  templateUrl: './cursos-lista.component.html',
})
export class CursosListaComponent {
  @ViewChild(AlertModalComponent) alertModal!: AlertModalComponent;
  private cursosService: CursosService = inject(CursosService);
  cursos$: Observable<Curso[]> = this.cursosService.getCursos().pipe(
    catchError(() => {
      this.handleError();
      return of([]);
    })
  );

  deleteCurso(cursoId: number) {
    console.log(cursoId);
  }

  getCursos() {
    this.cursosService
      .getCursos()
      .pipe(
        catchError(() => {
          this.handleError();
          return of([]);
        })
      )
      .subscribe();
  }

  handleError() {
    this.alertModal.pushAlert({
      type: 'danger',
      msg: 'Erro ao carregar cursos',
    });
  }
}
