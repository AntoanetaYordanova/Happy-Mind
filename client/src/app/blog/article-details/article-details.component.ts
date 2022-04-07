import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IArticle } from 'src/app/interfaces/Article';
import { errorHandler } from 'src/app/user/utils';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article!: IArticle | undefined;
  backgroundImage: string = './assets/backgroundImagePattern.jpg'
  hasErrors: boolean = false;

  constructor(
    private articleService: ArticlesService, 
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchArticle();
  }


  fetchArticle(){
    this.article = undefined;
    this.articleService.getArticleById(this.route.snapshot.params['id']).subscribe({
      next : (article) => {
      this.article = article
      }, 
      error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
    });
  }
}
