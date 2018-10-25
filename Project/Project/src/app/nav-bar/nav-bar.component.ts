import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
	currentUrl: string;
  //Create two object of both class
  constructor(public authService: AuthService,
  			  private router: Router) { 
  	router.events.subscribe((_:NavigationEnd) => this.currentUrl = this.router.url);
  }

  ngOnInit() {
  }

  logout() {//forward-function to call the logout() from authService
    this.authService.logout();
  }
}
