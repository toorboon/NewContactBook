//basic basket for getting the app running and get the form and routing online
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms"; //used for creating the forms
import { AppRoutingModule } from './app-routing.module'; //used for making the links in the SAP appear like in a desktop app 
import { AppComponent } from './app.component'; //root module for bringing all the other app-modules together

//this basket is used for accessing all the necessary features from the Firebase
import { AngularFireModule } from "angularfire2"; //we need this to get the basic Firebase connection up and running
import { AngularFireDatabaseModule } from "angularfire2/database"; //if you want to access the no-SQL database from Firebase you have use this module (used to actually save users-data)
import { AngularFireStorageModule } from 'angularfire2/storage'; //the storage of the Firebase will be accessed with this one (used to upload pictures)
import { AngularFireAuthModule } from 'angularfire2/auth'; //the authentication functionality will be done with the inbuild Firebase Autentication module

//you will find here the credentials for your Firebase, if you compromis your API-Key put the new one here
import { environment } from "../environments/environment";

//basket for additional components necessary to add extra features
import { AuthService } from './shared/auth.service'; //service for authenticating the user at the Firebase
import { ContactComponent } from './contact/contact.component'; //merges the form (data-input) and the list (data-output) into one component so both could be used separatly
import { ContactListComponent } from './contact-list/contact-list.component'; //holds all the information about outputting the data from the Firebase in a human readable way
import { HeaderComponent } from './header/header.component'; //contains the heading for the app 
import { NavBarComponent } from './nav-bar/nav-bar.component'; //serves for the Navbar, in here you will also find the Logout button located
import { FooterComponent } from './footer/footer.component'; //contains the footing for the app
import { SupportComponent } from './support/support.component'; //the email-sending part can be found here
import { ContactService } from "./shared/contact.service"; //service where all the functions for populating the React form can be found here
import { LoginComponent } from './login/login.component'; //the login-form is found here, these module is also serving as a start screen for the router-outlet if user is not authenticated
import { ContactFormComponent } from './contact-form/contact-form.component'; //the input data form for filling the Firebase can be found here


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    ContactListComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    SupportComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connetion details
    AngularFireDatabaseModule,// we will import the classes here too 
    AngularFireStorageModule,//we use it to save the pictures into the Storage part of the Firebase
    AngularFireAuthModule, //we use this to authenticate the user using the Firebase Authentication Service
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
