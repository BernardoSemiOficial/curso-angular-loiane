import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

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

  @ViewChild('inputContadorValue') inputContador!: ElementRef;

  handleClickIncrement() {
    this.inputContador.nativeElement.value++;
    this.contadorContext.emit({
      contadorValue: this.inputContador.nativeElement.value,
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
