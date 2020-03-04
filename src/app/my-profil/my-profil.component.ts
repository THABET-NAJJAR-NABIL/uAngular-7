import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../Services/register.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {
  marsupilami_Information: any=[];
  marsupilami_List:any=[];
  constructor(private service: RegisterService, private router: Router) { }
//On page charging we need data user to be shown
  ngOnInit() {
    this.service.ge_Data_Profil().subscribe(response=>{
      this.marsupilami_Information=response.marsupilami_Information;
      this.marsupilami_List=response.marsupilami_List;
    },err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status ===401){
          this.router.navigate(['Connection']);
        }
      }
    });
  }
  //onClick delete friend
  delete_Friend_Profil(id){
    this.service.delete_Friend_service(id).subscribe(response=>{
      this.router.navigateByUrl('Home', {skipLocationChange: true}).then(()=>
        this.router.navigate(["Profil"]));
    });
  }
//onClick add friend
  add_Friend_Profil(id){
    this.service.add_Friend_service(id).subscribe(response=>{
      this.router.navigateByUrl('Home', {skipLocationChange: true}).then(()=>
        this.router.navigate(["Profil"]));

    });
  }


}
