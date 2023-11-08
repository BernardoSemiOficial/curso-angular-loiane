import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  lastName = 'Oliveira';
  isStudy = true;
  imageUrl =
    'https://fastly.picsum.photos/id/309/200/300.jpg?hmac=gmsts4-400Ihde9dfkfZtd2pQnbZorV4nBKlLOhbuMs';
  inputValue = '';
  inputValueSave = '';
  mouseOverText = false;

  getValue() {
    return 1;
  }

  getBoolean() {
    return true;
  }

  handleClickButton(event: MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const textContent = target.textContent;
    alert('clicou no botão com texto: ' + textContent);
  }

  handleKeyUpText(value: string) {
    this.inputValue = value;
  }

  handleKeyUpTextSave() {
    this.inputValueSave = this.inputValue;
  }

  handleMouseOverText() {
    this.mouseOverText = !this.mouseOverText;
  }
}
