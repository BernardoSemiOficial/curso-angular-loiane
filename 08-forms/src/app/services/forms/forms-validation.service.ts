import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class FormsValidationService {
  validateEmail(usersService: UsersService): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return usersService.emailExists(control.value).pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        map((emailExists) => (emailExists ? { emailExists: true } : null))
      );
    };
  }

  validateIqualsFields(fieldToCompare: string): ValidatorFn {
    return (
      control: AbstractControl<{ [key: string]: FormControl<string | null> }>
    ) => {
      const fieldToCompareControl = control.parent?.get(fieldToCompare);
      if (
        control?.value !== fieldToCompareControl?.value &&
        fieldToCompareControl?.touched
      )
        return { notIquals: true };

      return null;
    };
  }

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
