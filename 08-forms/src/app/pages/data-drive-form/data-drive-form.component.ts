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
        street: [null, Validators.required],
        district: [null, Validators.required],
        city: [null, Validators.required],
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
