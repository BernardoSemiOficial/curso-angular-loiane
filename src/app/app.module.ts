import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CursosGuard } from './shared/guards/cursos.guard';
import { AuthService } from './shared/services/auth/auth.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuard, CursosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
