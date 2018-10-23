import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
 ContactArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";
 searchTextFirst:string = "";

  constructor(private ContactService: ContactService) { }

  ngOnInit() {
         this.ContactService.getContacts().subscribe(
                 (list) => {
                         this.ContactArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });;
  }

  onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.ContactService.deleteContact($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
  }

  filterConditionFirst(Contact){
  return Contact.Type.toLowerCase().indexOf(this.searchTextFirst.toLowerCase()) != -1 ;
};

  filterCondition(Contact){
     return Contact.FirstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
     Contact.LastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
     Contact.PhoneNumber.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
     Contact.Email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 //|| 
     //Contact.Type.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
  }

  onShowForm(check){
    console.log('You are inside onShowForm')
    this.ContactService.toggleForm(check);
  }

}