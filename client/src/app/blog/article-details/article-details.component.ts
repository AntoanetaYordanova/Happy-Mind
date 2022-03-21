import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/interfaces/Article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article!: IArticle | undefined;
  backgroundImage: string = './assets/backgroundImagePattern.jpg'

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchArticle();
  }


  fetchArticle(){
    this.article = undefined;
    this.articleService.getArticleById(this.route.snapshot.params['id']).subscribe(article => this.article = article);
  }
}
