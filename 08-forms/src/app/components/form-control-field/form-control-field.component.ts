import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class FormControlFieldComponent implements OnChanges {
  @Input() formControlField!: NgModel | AbstractControl | null;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() feedbackMessage: { [key: string]: string } = {
    required: 'This field is required',
    email: 'This field is with email invalid',
    minLength: 'This field is with less characters than expected',
    invalid: 'This field is invalid',
  };
  @Input() message: { [key: string]: { text: string; type: MessageType } } = {
    required: {
      text: 'This field is required',
      type: MessageType.alertWarning,
    },
    email: {
      text: 'This field is with email invalid',
      type: MessageType.alertDanger,
    },
    minLength: {
      text: 'This field is with less characters than expected',
      type: MessageType.alertDanger,
    },
    invalid: { text: 'This field is invalid', type: MessageType.alertDanger },
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  analyticsFormControl() {
    const formControl = this.formControlField;
    const errors = formControl?.errors;
    const errorsKey = Object.keys(errors ?? {});
    console.log({ errors });

    return {
      errorsLength: errorsKey.length,
      errorKey: errorsKey[0],
      status: formControl?.status?.toLowerCase() ?? '',
    };
  }
}
