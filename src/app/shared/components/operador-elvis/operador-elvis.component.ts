import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss'],
})
export class OperadorElvisComponent {
  tarefa = {
    titulo: 'Lorem Ipsum',
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, reprehenderit.',
    usuario: {
      primeiroNome: 'Bernardo',
      segundoNome: null,
      endereco: {
        rua: 'Avenida Condessa Elisabeth de Robiano',
        cep: null,
      },
    },
  };
}
