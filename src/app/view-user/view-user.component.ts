import { Component, OnInit } from '@angular/core';
import {User} from '../models/user'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users:User[] =[]
  userSelected:User
  constructor() { }

  ngOnInit(): void {
    this.users =[
      new User('1','sdfsdf','sdfsdf','sdfsdf','sddfsdf','sdfsdf','sdfsdfsf'),
      new User('2','sdfsdf','sdfsdf','sdfsdf','sddfsdf','sdfsdf','sdfsdfsf'),
      new User('3','sdfsdf','sdfsdf','sdfsdf','sddfsdf','sdfsdf','sdfsdfsf')
    ]
  }

  onSelected(user:User){
  	this.userSelected =user
  }

}
