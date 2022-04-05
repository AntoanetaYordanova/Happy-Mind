import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment  } from 'src/environments/environment';
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

}
