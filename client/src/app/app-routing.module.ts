import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo: '/home'
  },
  {
    path : 'home',
    component : HomeComponent,
    data: {
      title : 'Home'
    }
  },
  {
    path : 'about',
    component : AboutComponent,
    data: {
      title : 'About'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

