import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  },
  {
    path: 'articles',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'therapists',
    loadChildren: () => import('./therapist/therapist.module').then(m => m.TherapistModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**' ,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

