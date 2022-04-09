import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ArticlesService } from 'src/app/blog/articles.service';
import { AuthService } from 'src/app/core/auth.service';
import { IArticle } from 'src/app/interfaces/Article';
import { errorHandler } from '../utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger('450ms', [
            animate('700ms 0.4s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  usersArticles!: IArticle[] | undefined;
  hasErrors: boolean = false;
  user = this.authService.getUser();

  constructor(
    private articlesService: ArticlesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.populateArticles();
  }

  populateArticles() {
    this.usersArticles = undefined;
    this.articlesService.getPopulatedUser().subscribe({
      next: (data) => {
        if (data) {
          this.usersArticles = data.favoriteArticles;
        }
      },
      error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
    });
  }

  removeHandler(event: any) {
    const articleId = event.target.getAttribute('id');

      this.articlesService
        .removeArticle(articleId)
        .pipe(
          tap(() => {
            window.location.reload();
          })
        )
        .subscribe({
          error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
        });
    
  }
}
