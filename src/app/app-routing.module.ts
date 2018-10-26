import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';


//here you find the routes we used, but keep in mind that these are all protected by the auth.service module (if you are not logged in, you don't see anything!)
const routes: Routes = [
{
   path: '', component: ContactComponent //we route per default to our main page (contact.component)
},
{
   path: 'support', component: SupportComponent //the email component
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
