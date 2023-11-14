import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgclassComponent } from './shared/components/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgforComponent } from './shared/components/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './shared/components/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './shared/components/diretiva-ngswitch/diretiva-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
