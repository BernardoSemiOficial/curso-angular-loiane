import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgclassComponent } from './shared/components/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgforComponent } from './shared/components/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './shared/components/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgstyleComponent } from './shared/components/diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgswitchComponent } from './shared/components/diretiva-ngswitch/diretiva-ngswitch.component';
import { OperadorElvisComponent } from './shared/components/operador-elvis/operador-elvis.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
