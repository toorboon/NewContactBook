import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Contact Book New';
  email: string;
  password: string;

  //we are creating an instance of the authService so we can use the features it is providing!
  constructor(public authService: AuthService) {}

  //passes the provided email and password to the authService login() functiono so it can be checked
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  //calls the logout function from authService and logout the actual user so a new user can login
  logout() {
    this.authService.logout();
  }
}
