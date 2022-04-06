import { AfterViewInit, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ArticlesService } from 'src/app/blog/articles.service';
import { AuthService } from 'src/app/core/auth.service';
import { IArticle } from 'src/app/interfaces/Article';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  usersArticles!: IArticle[];
  hasErrors: boolean = false;
  user = this.authService.getUser();

  constructor(
    private articlesService: ArticlesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.populateArticles();
  }

  populateArticles() {
    try {
      this.articlesService.getPopulatedUser().subscribe((data) => {
        if(data) {
          this.usersArticles = data.favoriteArticles;
        }
      });
    } catch (err) {
      console.error(err);
      this.hasErrors = true;
    }
  }

  removeHandler(event: any) {
    const articleId = event.target.getAttribute('id');
    try {
      this.articlesService.removeArticle(articleId).pipe(tap(() => {
        window.location.reload();
      })).subscribe();
    } catch (err) {
      console.log(err);
      this.hasErrors = true;
    }
  }
}
