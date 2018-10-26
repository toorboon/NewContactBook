import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service"; //import the ContactComponent to use it's components.

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
 //define properties for the Form elements from the conact-list.component.html 
 ContactArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";
 searchTextFirst:string = "";

  constructor(private ContactService: ContactService) { }//create an object of the ContactService class

  ngOnInit() { 
         this.ContactService.getContacts().subscribe(
                 (list) => {
                         this.ContactArray = list.map( (item) => {//to display these records we have to convert them to an array-->ContactArray
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });;
  }

  onDelete($key){//this is for delete a record with a single parameter
     if(confirm("Are you sure you want to delete this record?")){//ask for confirmation from the user
       this.ContactService.deleteContact($key);
       this.showDeletedMessage = true;//sshow the delete-message
       setTimeout(()=> this.showDeletedMessage=false , 3000)//make it visible for 3sec
     }
  }

  filterConditionFirst(Contact){ //filter ony for the contact type
  return Contact.Type.toLowerCase().indexOf(this.searchTextFirst.toLowerCase()) != -1 ;
};

  filterCondition(Contact){ // filter for every other value
     return Contact.FirstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
     Contact.LastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
     Contact.PhoneNumber.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
     Contact.Email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
     
  }

  onShowForm(check){// call the function from  contact.service to show the form
    this.ContactService.toggleForm(check);
  }

}