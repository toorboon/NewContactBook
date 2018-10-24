import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	title:string;
	title2:string;

  constructor() {
  	this.title="Contact Book";
  	this.title2="New"

   }

  ngOnInit() {
  }

}
