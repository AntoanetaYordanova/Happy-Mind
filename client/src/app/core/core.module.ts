import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
