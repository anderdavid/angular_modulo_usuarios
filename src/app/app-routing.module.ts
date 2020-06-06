import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch: 'full'},
  {path:'inicio', component:ViewUserComponent },
  {path:'create', component:CreateUserComponent },
  {path:'view', component:ViewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
