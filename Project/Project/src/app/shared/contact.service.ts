import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList,  } from "angularfire2/database";
import { AngularFireStorage } from 'angularfire2/storage';

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
     Email:new FormControl('', Validators.email),
     Type:new FormControl('', Validators.required),
     comment:new FormControl(''),
     photo:new FormControl('')
  });

  constructor(private firebase: AngularFireDatabase,
              private storage: AngularFireStorage) { }

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
                 comment:Contact.comment,
                 photo:Contact.photo
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
        comment:Contact.comment,
        photo:Contact.photo
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
        const downloadURL = ref.getDownloadURL().subscribe(url => {
        const Url = url;
        this.imageURL = url;
        console.log(Url);
        });

    })
   }

  /*THIS WILL BE CALLED FROM CONTACT FORM HTML INSIDE ON SUBMIT FUNCTION
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }*/


}
