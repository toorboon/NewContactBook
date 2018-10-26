import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service'; //needs to be imported so we can verify if the user trying to login is allowed to authenticate

declare var $: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  	email: string;
  	password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  	
  }

  //passes the provided email and password to the authService login() function so it can be checked there
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }
}
