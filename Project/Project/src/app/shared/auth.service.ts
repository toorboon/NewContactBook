import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app'; //the user login is handled in here

import { Observable } from 'rxjs'; //this is needed to use the "observable" feature for 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
  	this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login User created!', value);
      })
      .catch(err => {
        console.log('Signup went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login sucessful!');
      })
      .catch(err => {
        alert('Login went wrong: ' + err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }


}