import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service'; //the import is needed here so the router-outlet can be shown or not, if the user is logged in

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Contact Book New';
  //email: string;
  //password: string;

  //we are creating an instance of the authService so we can use the features it is providing!
  constructor(public authService: AuthService
    ) {}

}
