import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizadas',
  templateUrl: './diretiva-customizadas.component.html',
  styleUrls: ['./diretiva-customizadas.component.scss'],
})
export class DiretivaCustomizadasComponent {
  cursos = ['Angular', 'Javascript', 'Typescript'];
  isVisibleCursos = false;
}
