import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsValidationService {
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
