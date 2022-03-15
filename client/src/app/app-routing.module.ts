import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'articles',
    component : BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

