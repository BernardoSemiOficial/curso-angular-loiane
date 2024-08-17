import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PocAsyncComponent } from '../../components/poc-async.component';
import { PocTakeUntilDestroyedComponent } from '../../components/poc-take-until-destroyed.component';
import { PocTakeUntilComponent } from '../../components/poc-take-until.component';
import { PocTakeComponent } from '../../components/poc-take.component';
import { PocUnsubComponent } from '../../components/poc-unsub.component';
import { PocComponent } from '../../components/poc.component';
import { EnviarValorService } from '../../services/enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  standalone: true,
  imports: [
    CommonModule,
    PocComponent,
    PocUnsubComponent,
    PocTakeComponent,
    PocTakeUntilComponent,
    PocAsyncComponent,
    PocTakeUntilDestroyedComponent,
  ],
  templateUrl: './unsubscribe-poc.component.html',
  styleUrl: './unsubscribe-poc.component.scss',
})
export class UnsubscribePocComponent {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  mostrarComponentes = true;

  ngOnInit() {}

  emitirValor(valor: string) {
    this.enviarValorService.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
