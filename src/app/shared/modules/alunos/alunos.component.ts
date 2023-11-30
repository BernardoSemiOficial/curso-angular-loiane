import { Component } from '@angular/core';
import { Alunos } from './models/alunos.models';
import { AlunosService } from './services/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent {
  alunos: Alunos[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }
}
