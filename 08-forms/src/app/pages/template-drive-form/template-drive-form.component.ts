import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlFieldComponent } from '../../components/form-control-field/form-control-field.component';

@Component({
  selector: 'app-template-drive-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FormControlFieldComponent],
  templateUrl: './template-drive-form.component.html',
  styleUrl: './template-drive-form.component.scss',
})
export class TemplateDriveFormComponent {
  usuario: any = {
    name: '',
    email: '',
  };

  onSubmit(form: any) {
    console.log(form);
    console.log('You submitted value:', form.value);
    console.log('You submitted value:', this.usuario);
  }
}
