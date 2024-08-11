import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsValidationService {
  validateCep(control: AbstractControl): ValidationErrors | null {
    const cepCleaded = control?.value?.replace(/\D/g, '');
    const cepValidRegex = /^\d{8}$/;
    const isCepValid = cepValidRegex.test(cepCleaded);
    if (!isCepValid) return { invalid: true };
    return null;
  }

  validateMinSelectedCheckbox(min?: number): ValidatorFn {
    return (
      control: AbstractControl<
        {
          label: FormControl<string | null>;
          checked: FormControl<boolean | null>;
        }[],
        {
          label: FormControl<string | null>;
          checked: FormControl<boolean | null>;
        }[]
      >
    ) => {
      const minRequired = 1;
      const quantitySelected = control.value.filter(
        (item) => item.checked
      ).length;
      if (quantitySelected < minRequired) return { required: true };
      if (min && quantitySelected < min) return { minLength: true };
      if (quantitySelected >= minRequired || (min && quantitySelected >= min))
        return null;
      return null;
    };
  }
}
