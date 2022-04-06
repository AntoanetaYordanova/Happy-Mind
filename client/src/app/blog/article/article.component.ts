import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/interfaces/Article';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ArticlesService } from '../articles.service';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  tagUrl: string = '/assets/images/tag-solid.svg'; 
  @Input() article!: IArticle
  faCoffee = faCoffee;
  articles!: string[];

  hasLiked: boolean = false;

  constructor(private articleService: ArticlesService, private authService: AuthService) { }

  ngOnInit(): void {    
    this.getUsersArticles(this.authService.getUser()._id);
  }

  save(event: any){    
    this.articleService.saveArticle(event.target.getAttribute('id')).subscribe();
    event.target.setAttribute('disabled', 'true');
    event.target.nextElementSibling.classList.remove('hidden');

    event.target.classList.add('hidden');
  }

  getUsersArticles(id:string){
    this.articleService.getPopulatedUser(id).subscribe((data) => {
      this.articles = data.favoriteArticles;
      this.hasLiked = this.articles.includes(this.article._id);
      
    });
  }

}
