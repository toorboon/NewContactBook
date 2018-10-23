import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';



const routes: Routes = [
{
   path: '', component: ContactComponent
},
{
   path: 'support', component: SupportComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
