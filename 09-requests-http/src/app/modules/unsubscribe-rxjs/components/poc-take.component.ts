import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { EnviarValorService } from '../services/enviar-valor.service';
import { PocBaseComponent } from './poc-base/poc-base.component';

@Component({
  standalone: true,
  imports: [CommonModule, PocBaseComponent],
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `,
})
export class PocTakeComponent implements OnInit, OnDestroy {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  nome = 'Componente com take';
  valor!: string;

  ngOnInit() {
    this.enviarValorService
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        take(1)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
