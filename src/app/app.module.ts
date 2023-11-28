import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoDetalheComponent } from './shared/components/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './shared/components/cursos/cursos.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CursosService } from './shared/services/cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './shared/components/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CursosComponent,
    HeaderComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
