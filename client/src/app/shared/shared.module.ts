import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { ScrollArrowComponent } from './scroll-arrow/scroll-arrow.component';
import { ScrollDirective } from './scroll.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
    ScrollArrowComponent,
    ScrollDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    ScrollArrowComponent
  ]
})
export class SharedModule { }
