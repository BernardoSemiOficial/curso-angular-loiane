import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './shared/components/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './shared/pipes/camel-case.pipe';
import { FiltroArrayPipe } from './shared/pipes/filtro-array.pipe';
import { SettingService } from './shared/services/setting.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    /** MÉTODO 1 PARA DECLARAR O LOCALE DA APLICAÇÃO */
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR',
    // },

    /** MÉTODO 2 PARA DECLARAR O LOCALE DA APLICAÇÃO ATRAVÉS DE UMA CLASSE DE SERVIÇO */
    {
      provide: LOCALE_ID,
      deps: [SettingService],
      useFactory: (settingService: SettingService) =>
        settingService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
