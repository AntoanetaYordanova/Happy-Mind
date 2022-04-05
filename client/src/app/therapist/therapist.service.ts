import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment  } from 'src/environments/environment';
import { IComment } from '../interfaces/Comment';
import { ITherapistProfile } from '../interfaces/TherapistProfile';

const API_URL = environment.API_URL;


@Injectable({
  providedIn: 'root'
})
export class TherapistService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<ITherapistProfile[]>{
    return this.client.get<ITherapistProfile[]>(`${API_URL}/therapists/catalog`);
  }

  getById(id:string): Observable<ITherapistProfile>{
    return this.client.get<ITherapistProfile>(`${API_URL}/therapists/${id}`);
  }

  getComments(id: string) {
    return this.client.get<IComment[]>(`${API_URL}/therapists/${id}/comments`);
  }

  postComment(id: string, data: {content: string}){
    return this.client.post<ITherapistProfile>(`${API_URL}/therapists/${id}/comments`, data);
  }
}
