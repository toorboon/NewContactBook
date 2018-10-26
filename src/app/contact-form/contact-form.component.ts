import { Component, OnInit } from '@angular/core';
import { ContactService  } from "../shared/contact.service";
import { AngularFireStorage } from 'angularfire2/storage';

declare var $: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
  //define multiple properties to use it in the functions
  submitted: boolean;
  formControls =this.ContactService.form.controls;
  showSuccessMessage: boolean;
  selectedFiles: FileList;
  file: File;
  photo_url: string = '';
  //make two objects from each class
  constructor(private ContactService: ContactService,
              private storage: AngularFireStorage,
              ) { }

  ngOnInit() {
  }

  onSubmit(){
     this.submitted = true;//set the property to tru
     //insert or update a contact
     if(this.ContactService.form.valid){
        if(this.ContactService.form.get("$key").value == null ){ 
          this.ContactService.insertContact(this.ContactService.form.value);
        }else {
          this.ContactService.updateContact(this.ContactService.form.value);
        }//show message for 3sec  and reset 
       this.showSuccessMessage =true;
       setTimeout(()=>this.showSuccessMessage=false,3000);
       this.submitted = false;
       this.ContactService.form.reset();
       this.ContactService.toggleForm();
     }
  }
    //hide the form and reset the values
  onCancel(){
    this.ContactService.toggleForm();
    this.ContactService.form.reset();
  }
  //use this function to choose an image to upload
  chooseFiles(event) {
   this.selectedFiles = event.target.files;
   if (this.selectedFiles.item(0))
     this.uploadpic();
   }
   //upload an image to the storage
  uploadpic() {
   let file = this.selectedFiles.item(0);
   let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);//give unique key for every element
   const pathFile='/angfire2store/' + uniqkey; //save the path of the file
   const uploadTask = this.storage.upload(pathFile, file).then(() => {
        const ref = this.storage.ref(pathFile);
        let downloadURL = ref.getDownloadURL().subscribe(url => {
          this.photo_url = url;
          alert('Photo with URL uploaded: ' + this.photo_url);
        });
    })
  }
}