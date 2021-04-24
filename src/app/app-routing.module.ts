import { LogindetailsComponent } from './logindetails/logindetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {
    path:'profile' , component:UserprofileComponent
  },
  {
    path:'logindetails', component:LogindetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
