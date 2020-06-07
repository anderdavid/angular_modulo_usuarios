import { Injectable } from '@angular/core';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[
    new User('1','sdfsdf','sdfsdf','sdfsdf','sddfsdf','sdfsdf','sdfsdfsf'),
    new User('2','sdfsdf','sdfsdf','sdfsdf','sddfsdf','sdfsdf','sdfsdfsf'),
    new User('3','sdfsdf','sdfsdf','sdfsdf','sddfsdf','sdfsdf','sdfsdfsf')
  ]

  constructor() { }
  getUsers(){
    return this.users
  }
}
