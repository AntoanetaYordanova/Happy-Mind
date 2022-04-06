import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));    
  }

  getUser(){
    const user = localStorage.getItem('user');
    if(user) {
      return JSON.parse(user);
    } 
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
