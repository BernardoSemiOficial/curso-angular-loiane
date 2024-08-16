import { FormGroup } from '@angular/forms';

export abstract class BaseForm {
  abstract onSubmit(): void;
  form!: FormGroup;

  submit() {
    console.log(this.form);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.onSubmit();
  }

  getField(fieldName: string) {
    return this.form.get(fieldName);
  }

  resetForm() {
    this.form.reset();
  }
}
