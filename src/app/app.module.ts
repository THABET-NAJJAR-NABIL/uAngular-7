import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RegisterService} from './Services/register.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegisterComponent } from './register/register.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import {AuthGuard} from './Services/auth.guard';
import {TokenInterceptorService} from './Services/token-interceptor.service';
import {ConfirmEqualValidatorDirective} from './Services/password-validator.directive';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConnectionComponent,
    RegisterComponent,
    MyProfilComponent,
    UpdateProfilComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,


    FormsModule

  ],
  providers: [RegisterService, AuthGuard, {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
