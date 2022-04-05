import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports : [
    BlogComponent
  ]
})
export class BlogModule { }
