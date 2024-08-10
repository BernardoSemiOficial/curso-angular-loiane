import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlFieldComponent } from '../../components/form-control-field/form-control-field.component';
import { LocalizationService } from '../../services/localization.service';

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

  usuario: any = {
    name: '',
    email: '',
  };

  onSubmit(form: any) {
    console.log(form);
    console.log('You submitted value:', form.value);
    console.log('You submitted value:', this.usuario);
  }

  getAddress(cep: string) {
    if (!cep) return;
    console.log(cep);

    const cepCleaded = cep.replace(/\D/g, '');
    const cepValidRegex = /^\d{8}$/;
    const isCepValid = cepValidRegex.test(cepCleaded);

    if (!isCepValid) console.log('CEP invalid');

    this.localizationService.getAddressInfo(cepCleaded).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
