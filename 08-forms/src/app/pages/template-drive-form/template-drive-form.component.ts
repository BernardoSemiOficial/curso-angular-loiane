import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormControlFieldComponent } from '../../components/form-control-field/form-control-field.component';
import {
  LocalizationBrazil,
  LocalizationService,
} from '../../services/localization/localization.service';

@Component({
  selector: 'app-template-drive-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FormControlFieldComponent],
  templateUrl: './template-drive-form.component.html',
  styleUrl: './template-drive-form.component.scss',
})
export class TemplateDriveFormComponent {
  private localizationService: LocalizationService =
    inject(LocalizationService);
  private http: HttpClient = inject(HttpClient);

  @ViewChild('formTemplateDrive') form!: NgForm;

  usuario: any = {
    name: '',
    email: '',
  };

  onSubmit(form: any) {
    console.log(form);
    console.log('You submitted value:', form.value);
    console.log('You submitted value:', this.usuario);

    this.http.post('https://httpbin.org/post', form.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getAddress(cep: string) {
    this.localizationService.validateAndGetAddress(cep).subscribe({
      next: (data) => {
        console.log(data);
        this.populateFields(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  populateFields(data: LocalizationBrazil) {
    this.form.form.patchValue({
      address: {
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
      },
    });
  }

  resetForm() {
    this.form.reset();
  }
}
