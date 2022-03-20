import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { BlogRoutingModule } from './app-blog-routing.module';



@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports : [
    BlogComponent
  ]
})
export class BlogModule { }
