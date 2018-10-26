import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
   //define two string properties
	title:string;
	title2:string;

  constructor() {
    //give valu for them
  	this.title="Contact Book";
  	this.title2="New"

   }

  ngOnInit() {
  }

}
