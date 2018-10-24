import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList,  } from "angularfire2/database";
import { AngularFireStorage } from 'angularfire2/storage';
//import { ContactFormComponent } from '../contact-form/contact-form.component'

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  ContactList: AngularFireList<any>;
  selectedFiles: FileList;
  file: File;
  imageURL: string = '';
 

  form = new FormGroup({
     $key:new FormControl(null),
     FirstName:new FormControl('', Validators.required),
     LastName:new FormControl('', Validators.required),
     PhoneNumber:new FormControl('', [Validators.required, Validators.minLength(8)]),
     Email:new FormControl('', [Validators.required, Validators.email]),
     Type:new FormControl('', Validators.required),
     Comment:new FormControl('', Validators.required),
     Photo:new FormControl('', Validators.required)
  });

  constructor(private firebase: AngularFireDatabase,
              private storage: AngularFireStorage,
              //private contactFormComponent: ContactFormComponent
              ) { }

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
                 Comment:Contact.Comment,
                 Photo:Contact.Photo
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
        Comment:Contact.Comment,
        Photo:Contact.Photo
    });
  }

  deleteContact($key: string){
      this.ContactList.remove($key);
  }

  toggleForm(check=false){
      if (check) {
          if ($('#contact-form-container').is(':visible')){
              //do nothing
          }else{
              $('#contact-form-container').toggle();
          }
      }else{
          $('#contact-form-container').toggle(); 
      }
  }
/*
  chooseFiles(event) {
   this.selectedFiles = event.target.files;
   if (this.selectedFiles.item(0))
     this.uploadpic();
   }

  uploadpic() {
   let file = this.selectedFiles.item(0);
   let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
   const pathFile='/angfire2store/' + uniqkey;
   const uploadTask = this.storage.upload(pathFile, file).then(() => {
        const ref = this.storage.ref(pathFile);
        let downloadURL = ref.getDownloadURL().subscribe(url => {
        const Url = url;
        this.imageURL = url;
        console.log(Url);
      //  this.contactFormComponent.populateUrl(Url);
        });

    })*/
   
   
   }

  /*THIS WILL BE CALLED FROM CONTACT FORM HTML INSIDE ON SUBMIT FUNCTION
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }*/



