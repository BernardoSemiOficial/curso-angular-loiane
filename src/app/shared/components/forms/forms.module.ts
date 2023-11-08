import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as FormsModuleCore } from '@angular/forms';
import { FormsComponent } from './forms.component';

@NgModule({
  declarations: [FormsComponent],
  imports: [CommonModule, FormsModuleCore],
  exports: [FormsComponent],
})
export class FormsModule {}
