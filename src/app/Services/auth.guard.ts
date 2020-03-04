import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {RegisterService} from "./register.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: RegisterService, private router: Router) { }

  canActivate(): boolean {
    if(this.service.LoggedIn()){
      return true;
    }else{
      this.router.navigate(['Connection']);
      return false;
    }
  }
}
