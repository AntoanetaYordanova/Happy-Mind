import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { IArticle } from '../interfaces/Article';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { errorHandler } from '../utils/utils';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: 'translateY(-40px)' }),
          stagger('450ms', [
            animate('800ms 0.5s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {
  imgSrc: String = '/assets/images/homeBackground.jpg';
  articles!: IArticle[] | undefined;
  hasErrors: boolean = false;

  constructor(
    private articleService: ArticlesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.articles = undefined;
    this.articleService.getAllArticles().subscribe({
      next: (articles) => {
        this.articles = articles;
      },
      error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
    });
  }
}
