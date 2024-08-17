import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../services/enviar-valor.service';
import { PocBaseComponent } from './poc-base/poc-base.component';

@Component({
  standalone: true,
  imports: [CommonModule, PocBaseComponent],
  selector: 'app-poc-async',
  template: `
    @let valor = valor$ | async;
    <app-poc-base [nome]="nome" [valor]="valor ?? ''" estilo="bg-success">
    </app-poc-base>
  `,
})
export class PocAsyncComponent implements OnInit, OnDestroy {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  nome = 'Componente com async';
  valor$: Observable<string> = of('');

  ngOnInit() {
    this.valor$ = this.enviarValorService
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
