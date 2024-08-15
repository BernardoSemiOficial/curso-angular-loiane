import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';

export enum MessageType {
  alertWarning = 'alert-warning',
  alertDanger = 'alert-danger',
  alertSuccess = 'alert-success',
}

@Component({
  selector: 'app-form-control-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlFieldComponent),
      multi: true,
    },
  ],
  templateUrl: './form-control-field.component.html',
  styleUrl: './form-control-field.component.scss',
})
export class FormControlFieldComponent implements ControlValueAccessor {
  @Input() formControlField!: NgModel | AbstractControl | null;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() message!: { [key: string]: { text: string; type: MessageType } };
  controlValue: any;
  isDisabled: boolean = false;

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

  _onChange = (_: any) => {};
  _onTouched = () => {};

  writeValue(value: any): void {
    if (value !== this.controlValue) {
      this.controlValue = value;
    }
  }
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
