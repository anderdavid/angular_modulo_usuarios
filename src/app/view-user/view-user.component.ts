import { Component, OnInit } from '@angular/core';
import {User} from '../models/user'
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users:User[] =[]
  userSelected:User
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.users =this.userService.getUsers()
  }

  onSelected(user:User){
  	this.userSelected =user
  }

}
