import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cicloValor = 5;
  isVisibleCiclo = true;

  incrementarCicloValor() {
    this.cicloValor++;
  }

  esconderCiclo() {
    this.isVisibleCiclo = false;
  }
}
