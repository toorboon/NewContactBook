import { Component, OnInit } from '@angular/core';
import { ContactService  } from "../shared/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  ngOnInit() {
  	this.ContactService.toggleForm();
  }

}
