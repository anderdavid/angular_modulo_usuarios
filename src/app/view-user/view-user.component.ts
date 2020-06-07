import { Component, OnInit } from '@angular/core';
import {User} from '../models/user'
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users:any =[]
  userSelected:User
  constructor(private rest:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    console.log("viewUserComponent:getProducts")
    this.users=[]
    this.rest.getUsers().subscribe((data)=>{
      console.log(data)
      console.log(data.status)
      if(data.status){
        this.users =data.users
      }
      
    })
  }

  onSelected(user:User){
  	this.userSelected =user
  }

}
