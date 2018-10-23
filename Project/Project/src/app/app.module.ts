import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';

import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SupportComponent } from './support/support.component';
import { ContactService } from "./shared/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    ContactListComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connetion details
    AngularFireDatabaseModule,// we will import the classes here too 
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
