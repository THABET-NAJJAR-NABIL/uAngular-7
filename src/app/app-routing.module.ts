import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ConnectionComponent} from './connection/connection.component';
import {MyProfilComponent} from './my-profil/my-profil.component';
import {AuthGuard} from './Services/auth.guard';
import {UpdateProfilComponent} from './update-profil/update-profil.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'Home',
    component : HomeComponent
  },
  {
    path : 'Register',
    component : RegisterComponent
  },
  {
    path : 'Profil/Register',
    component : RegisterComponent
  },


  {
    path : 'Connection',
    component : ConnectionComponent
  },
  {
    path : 'Profil',
    component : MyProfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'Profil/UpdateProfil',
    component : UpdateProfilComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
