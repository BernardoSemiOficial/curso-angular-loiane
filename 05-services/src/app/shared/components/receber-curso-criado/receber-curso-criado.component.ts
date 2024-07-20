import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss'],
})
export class ReceberCursoCriadoComponent implements OnInit {
  curso!: string;

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursosService.eventNewCurso.subscribe((curso) => (this.curso = curso));
  }
}
