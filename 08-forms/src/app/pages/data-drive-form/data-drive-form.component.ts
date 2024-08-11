import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormControlFieldComponent } from '../../components/form-control-field/form-control-field.component';
import {
  LocalizationBrazil,
  LocalizationService,
} from '../../services/localization.service';

@Component({
  selector: 'app-data-drive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormControlFieldComponent],
  templateUrl: './data-drive-form.component.html',
  styleUrl: './data-drive-form.component.scss',
})
export class DataDriveFormComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private localizationService: LocalizationService =
    inject(LocalizationService);
  private http: HttpClient = inject(HttpClient);
  form!: FormGroup;

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    //   address: new FormGroup({
    //     street: new FormControl(null),
    //     city: new FormControl(null),
    //   }),
    // })
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        cep: [null, Validators.required],
        number: [null, Validators.required],
        complement: [null],
        street: [{ value: null, disabled: true }, Validators.required],
        district: [{ value: null, disabled: true }, Validators.required],
        city: [{ value: null, disabled: true }, Validators.required],
        state: [null, [Validators.required]],
      }),
    });

    this.getStates();
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.http.post('https://httpbin.org/post', this.form.value).subscribe({
      next: (data) => {
        console.log(data);
        this.resetForm();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  resetForm() {
    this.form.reset();
  }

  getAddress() {
    const cep = this.form.get('address.cep')?.value;
    console.log(cep);
    if (!cep) return;

    const cepCleaded = cep.replace(/\D/g, '');
    const cepValidRegex = /^\d{8}$/;
    const isCepValid = cepValidRegex.test(cepCleaded);

    if (!isCepValid) console.log('CEP invalid');

    this.localizationService.getAddressInfo(cepCleaded).subscribe({
      next: (data) => {
        console.log(data);
        this.populateFields(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getStates() {
    this.localizationService.getStatesBrazil().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  populateFields(data: LocalizationBrazil) {
    this.form.patchValue({
      address: {
        complement: data.complemento,
        street: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
      },
    });
  }
}
