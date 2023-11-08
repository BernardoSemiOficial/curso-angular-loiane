import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule as FormsModuleCore } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicloComponent } from './shared/components/ciclo/ciclo.component';
import { DataBindingComponent } from './shared/components/data-binding/data-binding.component';
import { FormsModule } from './shared/components/forms/forms.module';
import { InputPropertiesComponent } from './shared/components/input-properties/input-properties.component';
import { OutputPropertyComponent } from './shared/components/output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertiesComponent,
    OutputPropertyComponent,
    CicloComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModuleCore, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
