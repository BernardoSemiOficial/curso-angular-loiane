import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.scss'],
})
export class InputPropertiesComponent {
  @Input() pokemon = {
    nome: '',
    tipo: '',
  };
}
