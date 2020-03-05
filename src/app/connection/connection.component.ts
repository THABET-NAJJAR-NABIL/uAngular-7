import {Component, OnInit, } from '@angular/core';
import {RegisterService} from '../Services/register.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  constructor(private service: RegisterService, private router: Router) { }

  error = '';
model: any = [];

  ngOnInit() {
  }
  // Executed onSubmit the form connection,
   VerifyConnection() {
   this.service.Verify_Connection_server(this.model.username, this.model.password)
     .subscribe(response => {
       console.log(response)
       localStorage.setItem('token', response.token);
         this.router.navigate(['Home']);
     }, err => {
       if (err.status === 404) {
         this.error = err.error.message;
       }
     });
  }
}
