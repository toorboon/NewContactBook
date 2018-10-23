import { Component, OnInit } from '@angular/core';
import { ContactService  } from "../shared/contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  submitted: boolean;
  formControls =this.ContactService.form.controls;
  showSuccessMessage: boolean;

  constructor(private ContactService: ContactService) { }

  ngOnInit() {
    
  }

  onSubmit(){
     this.submitted = true;
     if(this.ContactService.form.valid){
        if(this.ContactService.form.get("$key").value == null ){ 
          this.ContactService.insertContact(this.ContactService.form.value);
        }else {
          this.ContactService.updateContact(this.ContactService.form.value);
        }
       this.showSuccessMessage =true;
       setTimeout(()=>this.showSuccessMessage=false,3000);
       this.submitted = false;
       this.ContactService.form.reset();
       this.ContactService.toggleForm();
     }
  }

  onCancel(){
    this.ContactService.toggleForm();
    this.ContactService.form.reset();
  }
}