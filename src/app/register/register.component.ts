import { Component, OnInit} from '@angular/core';
import {RegisterService} from '../Services/register.service';
import {Router} from '@angular/router';
import {Person} from '../Model/Person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  person: Person;
  error = '';
  password_2 = '';
  constructor(private service: RegisterService, private router: Router) { }

  ngOnInit() {

  }
// onSubmit the from either form registration or for adding a friend
  onSubmit() {
    console.log(this.model);
     this.service.save_user(this.model)
      .subscribe(response => {
      }
      , err => {
        if (err.status === 404) {
          this.error = err.error.message;

        }


      });



  }

}


/*

    // To verify if the user will do a registration or will add friend
        // if the user is not connected so
        if (!this.service.LoggedIn()) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['Home']);
          // else he is adding a friend
        } else {

          this.service.ge_ID_Friend_Added(this.person.email).subscribe(resp => {
            this.service.add_Friend_service(resp.idFriend).subscribe(res => {
              this.router.navigateByUrl('Home', {skipLocationChange: true}).then(() =>
                this.router.navigate(['Profil']));

            });
          });

        }

 */
