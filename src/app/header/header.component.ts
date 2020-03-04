import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../Services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

}
