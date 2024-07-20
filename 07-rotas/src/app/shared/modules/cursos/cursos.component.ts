import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from '../../services/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  currentPage: number = 1;
  cursos: { id: number; name: string }[] = [];

  constructor(private cursosService: CursosService, private router: Router) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  handleClickNextPage() {
    this.router.navigate(['cursos'], {
      queryParams: { currentPage: ++this.currentPage },
    });
  }
}
