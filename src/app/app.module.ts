import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaCustomizadasComponent } from './shared/components/diretiva-customizadas/diretiva-customizadas.component';
import { DiretivaNgclassComponent } from './shared/components/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgforComponent } from './shared/components/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './shared/components/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgstyleComponent } from './shared/components/diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgswitchComponent } from './shared/components/diretiva-ngswitch/diretiva-ngswitch.component';
import { ExemploNgContentComponent } from './shared/components/exemplo-ng-content/exemplo-ng-content.component';
import { OperadorElvisComponent } from './shared/components/operador-elvis/operador-elvis.component';
import { FundoAmareloDirective } from './shared/directives/fundo-amarelo/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/directives/highlight-mouse/highlight-mouse.directive';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';
import { NgelseDirective } from './shared/directives/ngelse/ngelse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    DiretivaCustomizadasComponent,
    HighlightDirective,
    NgelseDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
