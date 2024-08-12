import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormControlFieldComponent } from '../../components/form-control-field/form-control-field.component';
import { FormsValidationService } from '../../services/forms/forms-validation.service';
import {
  LocalizationBrazil,
  LocalizationService,
} from '../../services/localization/localization.service';

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
  private formsValidationService: FormsValidationService = inject(
    FormsValidationService
  );
  form!: FormGroup;
  states$ = this.localizationService.getStatesBrazil();
  tecnologies: { id: number; nome: string }[] = [];
  frameworks: string[] = ['Angular', 'React', 'Vue', 'Svelte', 'Ember'];

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
      confirmEmail: [
        null,
        [this.formsValidationService.validateIqualsFields('email')],
      ],
      tecnologies: [null, Validators.required],
      newsletter: [null, Validators.required],
      terms: [null, [Validators.required, Validators.requiredTrue]],
      frameworks: this.buildFrameworks(),
      address: this.formBuilder.group({
        cep: [
          null,
          [Validators.required, this.formsValidationService.validateCep],
        ],
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

  get frameworksFormArray(): FormArray<
    FormGroup<{
      label: FormControl<string | null>;
      checked: FormControl<boolean | null>;
    }>
  > {
    return this.form.get('frameworks') as FormArray;
  }

  buildFrameworks() {
    const frameworksControls = this.frameworks.map((frame) =>
      this.formBuilder.group({ label: frame, checked: false })
    );
    return this.formBuilder.array(frameworksControls, {
      validators: [this.formsValidationService.validateMinSelectedCheckbox(2)],
    });
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
