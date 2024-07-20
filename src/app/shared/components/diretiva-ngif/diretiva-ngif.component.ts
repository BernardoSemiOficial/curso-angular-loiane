import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
})
export class DiretivaNgifComponent {
  cursos = ['Angular', 'Javascript', 'Typescript'];
  isVisibleCursos = false;
  isViewApresentation = true;

  handleClickViewCursos() {
    this.isVisibleCursos = !this.isVisibleCursos;
  }
}
