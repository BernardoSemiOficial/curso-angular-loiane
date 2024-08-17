import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { EnviarValorService } from '../services/enviar-valor.service';
import { PocBaseComponent } from './poc-base/poc-base.component';

@Component({
  standalone: true,
  imports: [CommonModule, PocBaseComponent],
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-primary">
    </app-poc-base>
  `,
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  nome = 'Componente com takeUntil';
  valor!: string;

  destroy$ = new Subject<void>();

  ngOnInit() {
    this.enviarValorService
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        takeUntil(this.destroy$)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
    console.log(`${this.nome} foi destruido`);
  }
}
