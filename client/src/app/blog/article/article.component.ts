import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IArticle } from 'src/app/interfaces/Article';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ArticlesService } from '../articles.service';
import { AuthService } from 'src/app/core/auth.service';
import { IComment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  tagUrl: string = '/assets/images/tag-solid.svg';
  faCheck = faCheck;

  @Input() article!: IArticle;
  articles!: IComment[];
  hasLiked: boolean = false;

  constructor(
    private articleService: ArticlesService,
    private authService: AuthService
  ) {}

  user = this.authService.getUser();
  ngOnInit(): void {
    if (this.user) {
      this.getUsersArticles(this.user._id);
    }
  }

  save(event: any) {
    this.articleService
      .saveArticle(event.target.getAttribute('id'))
      .subscribe();
    event.target.setAttribute('disabled', 'true');
    event.target.nextElementSibling.classList.remove('hidden');

    event.target.classList.add('hidden');
  }

  getUsersArticles(id: string) {
    this.articleService.getPopulatedUser().subscribe((data) => {
      if (data) {
        this.articles = data.favoriteArticles;  
        this.hasLiked = this.articles.some((v) => v._id == this.article._id);
      }
    });
  }
}
