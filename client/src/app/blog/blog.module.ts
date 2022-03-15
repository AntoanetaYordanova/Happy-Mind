import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BlogComponent
  ]
})
export class BlogModule { }
