import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	title:string;

  constructor() {
  	this.title="Contact Book New";

   }

  ngOnInit() {
  }

}
