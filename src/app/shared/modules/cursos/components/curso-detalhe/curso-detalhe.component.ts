import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../../../../services/cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id!: string;
  curso!: { id: number; name: string } | null;
  routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const idParams = params.get('id') ?? '';
      this.id = idParams;
      const cursoIsFound = this.cursosService.getCurso(Number(idParams));
      if (!cursoIsFound) this.router.navigate(['curso-nao-encontrado']);
      else this.curso = cursoIsFound;
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
