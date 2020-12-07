import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  validity = false;

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }

  async createUser(email:string,password:string){
    await this.authentication.signup(email,password);
  }

  async createAdmin(){

  }
}
