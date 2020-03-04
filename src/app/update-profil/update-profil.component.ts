import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../Services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {
  model: any = {};
oldModel:any={};

  constructor(private service: RegisterService, private router: Router) {
    this.oldModel=" ";
  }

  ngOnInit() {

    this.service.ge_Data_Profil_To_Update()
      .subscribe(response => {

        this.oldModel =response;

      });
  }
// To save changes
  onSubmit(){

    this.service.Changes_save_data(this.model.race,this.model.famille,this.model.nourriture,this.model.age)
      .subscribe(response => {
          this.router.navigate(['Profil']);

      });



  }

}
