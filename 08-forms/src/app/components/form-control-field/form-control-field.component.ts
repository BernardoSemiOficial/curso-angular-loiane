import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-control-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-control-field.component.html',
  styleUrl: './form-control-field.component.scss',
})
export class FormControlFieldComponent {
  @Input() formControlField!: NgModel;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() feedbackMessage!: string;
}
