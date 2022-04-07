import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../interfaces/User';
import { environment } from '../../environments/environment'
import { AuthService } from '../core/auth.service';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined;

  get hasUser():boolean{
    return !!this.authService.getUser();
  }

  constructor(private client: HttpClient, private authService: AuthService) { }

  register(data: { email: string, password: string }): Observable<IUser>{
    return this.client.post<IUser>(`${API_URL}/users/register`, data);
  }

  login(data: { email: string, password: string }): Observable<IUser>{    
    return this.client.post<IUser>(`${API_URL}/users/login`, data);
  }

  logout():Observable <any> {   
    this.authService.removeUser();
    return this.client.get<any>(`${API_URL}/users/logout`);
  }

}
