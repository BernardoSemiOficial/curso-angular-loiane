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
  states$ = this.localizationService.getStatesBrazil();
  tecnologies: { id: number; nome: string }[] = [];

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
      tecnologies: [null, Validators.required],
      newsletter: [false, Validators.required],
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

    this.getTecnologies();
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

  selectAutoState() {
    const state = {
      id: '2',
      sigla: 'AL',
      nome: 'Alagoas',
    };

    this.form.get('address.state')?.setValue(state);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  getTecnologies() {
    this.tecnologies = [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'React' },
      { id: 3, nome: 'Vue' },
      { id: 4, nome: 'Svelte' },
      { id: 5, nome: 'Ember' },
    ];
  }

  selectAutoTecnologies() {
    this.form.get('tecnologies')?.setValue([1, 3, 5]);
  }
}
