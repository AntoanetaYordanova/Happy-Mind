import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../interfaces/Article';
import { Observable } from 'rxjs';
import { environment  } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor( private http: HttpClient) { }

  getAllArticles(): Observable<IArticle[]>{
    return this.http.get<IArticle[]>(API_URL + '/articles');
  }

  getArticleById(id: string) {
    return this.http.get<IArticle>(API_URL + '/articles/' + id);
  }
}
