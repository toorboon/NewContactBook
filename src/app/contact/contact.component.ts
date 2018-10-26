import { Component, OnInit } from '@angular/core';
import { ContactService  } from "../shared/contact.service"; //import the ContactService to use it'S components

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { } //create an object of the ContactService class

  ngOnInit() {
  	this.ContactService.toggleForm(); //call the function to hide out the Form when the App is loaded 
  }

}
