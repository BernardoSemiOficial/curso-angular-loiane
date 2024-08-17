import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../services/enviar-valor.service';
import { PocBaseComponent } from './poc-base/poc-base.component';

@Component({
  standalone: true,
  imports: [CommonModule, PocBaseComponent],
  selector: 'app-poc-take-until-destroyed',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `,
})
export class PocTakeUntilDestroyedComponent implements OnInit, OnDestroy {
  private enviarValorService: EnviarValorService = inject(EnviarValorService);
  private destroy$ = inject(DestroyRef);
  nome = 'Componente com takeUntilDestroyed';
  valor!: string;

  ngOnInit() {
    this.enviarValorService
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        takeUntilDestroyed(this.destroy$)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
