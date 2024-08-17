import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../services/enviar-valor.service';
import { PocBaseComponent } from './poc-base/poc-base.component';

@Component({
  standalone: true,
  imports: [CommonModule, PocBaseComponent],
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `,
})
export class PocUnsubComponent implements OnInit, OnDestroy {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  nome = 'Componente com unsubscribe';
  valor!: string;

  subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.enviarValorService
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log(`${this.nome} foi destruido`);
  }
}
