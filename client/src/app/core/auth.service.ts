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

  getUser(): IUser | null{
    const user = localStorage.getItem('user');
    if(user) {
      return JSON.parse(user);
    } else {
      return null
    }
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
