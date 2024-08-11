import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-control-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-control-field.component.html',
  styleUrl: './form-control-field.component.scss',
})
export class FormControlFieldComponent {
  @Input() formControlField!: NgModel | AbstractControl | null;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() feedbackMessage: { [key: string]: string } = {
    required: 'This field is required',
    email: 'This field is with email invalid',
    minLength: 'This field is with less characters than expected',
    invalid: 'This field is invalid',
  };
}
