import { Component, OnInit } from '@angular/core';
import  { ArticlesService }  from '../articles.service';
import { IArticle } from '../interfaces/Article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  imgSrc: String = '/assets/images/homeBackground.jpg';
  articles!: IArticle[];

  constructor(private articleService : ArticlesService) {
  }

  ngOnInit(): void {           
    this.articleService.getAllArticles().subscribe(articles => {this.articles = articles}); 
  }

}
