import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../services/enviar-valor.service';
import { PocBaseComponent } from './poc-base/poc-base.component';

@Component({
  standalone: true,
  imports: [CommonModule, PocBaseComponent],
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `,
})
export class PocComponent implements OnInit, OnDestroy {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  nome = 'Componente sem unsubscribe';
  valor!: string;

  ngOnInit() {
    this.enviarValorService
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
