import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent {
  @Input() contadorValue!: number;

  @Output() contadorContext = new EventEmitter<{
    contadorValue: number;
    lastAction: 'increment' | 'decrement';
  }>();

  handleClickIncrement() {
    this.contadorValue++;
    this.contadorContext.emit({
      contadorValue: this.contadorValue,
      lastAction: 'increment',
    });
  }

  handleClickDecrement() {
    this.contadorValue--;
    this.contadorContext.emit({
      contadorValue: this.contadorValue,
      lastAction: 'decrement',
    });
  }
}
