import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { BlogComponent } from './blog.component';


const routes: Routes = [
  {
    path : '',
    component : BlogComponent,
    data : {
      title: 'Articles'
    }
  },
  {
    path: ':id',
    component: ArticleDetailsComponent,
    data : {
      title: 'Article'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

