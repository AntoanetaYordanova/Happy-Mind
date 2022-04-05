import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { ScrollArrowComponent } from './scroll-arrow/scroll-arrow.component';
import { ScrollDirective } from './scroll.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
    ScrollArrowComponent,
    ScrollDirective,
    ShortenPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    ScrollArrowComponent,
    ShortenPipe
  ]
})
export class SharedModule { }
