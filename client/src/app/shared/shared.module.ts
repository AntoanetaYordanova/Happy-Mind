import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
