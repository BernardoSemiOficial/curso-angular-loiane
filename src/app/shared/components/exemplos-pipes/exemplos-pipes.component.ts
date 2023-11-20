import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
})
export class ExemplosPipesComponent {
  livro = {
    titulo: 'Learning Javascript Data Structures and Algorithms 2end ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  livros = ['JavaScript', 'Angular', 'React'];
  wordMatch: string = '';

  addCurso(curso: string) {
    this.livros.push(curso);
  }
}
