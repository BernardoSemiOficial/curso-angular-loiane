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

@Component({
  selector: 'app-data-drive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormControlFieldComponent],
  templateUrl: './data-drive-form.component.html',
  styleUrl: './data-drive-form.component.scss',
})
export class DataDriveFormComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
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
        state: [{ value: null, disabled: true }, [Validators.required]],
      }),
    });
  }

  onSubmit() {
    console.log(this.form);

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
}
