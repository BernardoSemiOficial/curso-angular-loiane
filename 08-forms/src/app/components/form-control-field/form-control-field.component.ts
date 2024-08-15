import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormsModule, NgModel } from '@angular/forms';

export enum MessageType {
  alertWarning = 'alert-warning',
  alertDanger = 'alert-danger',
  alertSuccess = 'alert-success',
}

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
  @Input() type: string = 'text';
  @Input() message!: { [key: string]: { text: string; type: MessageType } };

  analyticsFormControl() {
    const formControl = this.formControlField;
    const errors = formControl?.errors;
    const errorsKey = Object.keys(errors ?? {});

    return {
      errorsLength: errorsKey.length,
      errorKey: errorsKey[0],
      status: formControl?.status?.toLowerCase() ?? '',
    };
  }
}
