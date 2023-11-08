import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule as FormsModuleCore } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from './forms/forms.module';
import { InputPropertiesComponent } from './input-properties/input-properties.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputPropertiesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModuleCore, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
