import { AfterViewInit, Component, OnInit } from '@angular/core';
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
