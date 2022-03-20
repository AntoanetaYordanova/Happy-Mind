import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/interfaces/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  tagUrl: string = '/assets/images/tag-solid.svg'; 
  @Input() article!: IArticle

  constructor() { }

  ngOnInit(): void {
  }

}
