import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  inputValueNome = 'Bernardo';
  valueSobrenome = 'Pereira';
  familia = 'Familia';
  nacionalidade = 'Brasileiro';

  people = {
    name: 'João',
    sobrenome: 'Neves',
  };

  handleInputNome(value: string) {
    this.inputValueNome = value;
  }
}
