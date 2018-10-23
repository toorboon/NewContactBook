import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
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
  	$(window).on('load',function(){
        $('#exampleModal').modal('show');
    });
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  closeModal(){
  	$(function() {
   		$('#exampleModal').modal('toggle');
	});
  }


}
