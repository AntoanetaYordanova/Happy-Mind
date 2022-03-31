import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../interfaces/User';
import { environment } from '../../environments/environment'

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined;

  get hasUser():boolean{
    return !!this.user;
  }

  constructor(private client: HttpClient) { }

  register(data: { email: string, password: string }): Observable<IUser>{
    return this.client.post<IUser>(`${API_URL}/users/register`, data).pipe(tap((user) => this.user = user));
  }

  login(data: { email: string, password: string }): Observable<IUser>{
    return this.client.post<IUser>(`${API_URL}/users/login`, data).pipe(tap((user) => this.user = user));
  }
}
