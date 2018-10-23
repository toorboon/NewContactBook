import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";






@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firebase: AngularFireDatabase) { }
ContactList: AngularFireList<any>;


  form = new FormGroup({
     $key:new FormControl(null),
     FirstName:new FormControl('', Validators.required),
     LastName:new FormControl('', Validators.required),
     PhoneNumber:new FormControl('', [Validators.required, Validators.minLength(8)]),
     Email:new FormControl('', Validators.email),
     Type:new FormControl('', Validators.required),
     comment:new FormControl(''),

         });
  getContacts(){
                 this.ContactList = this.firebase.list('Contacts');
                 return this.ContactList.snapshotChanges();
         }
  insertContact(Contact){
         this.ContactList.push({
                 FirstName: Contact.FirstName,
                 LastName: Contact.LastName,
                 PhoneNumber: Contact.PhoneNumber,
                 Email:Contact.Email,
                 Type:Contact.Type,
                 comment:Contact.comment
         });
 }
 populateForm(Contact){
    this.form.setValue(Contact);
  }
updateContact(Contact){
    this.ContactList.update(Contact.$key,{
       FirstName: Contact.FirstName,
        LastName: Contact.LastName,
        PhoneNumber: Contact.PhoneNumber,
        Email:Contact.Email,
        Type:Contact.Type,
        comment:Contact.comment
    });
  }

deleteContact($key: string){
    this.ContactList.remove($key);
  }


}
