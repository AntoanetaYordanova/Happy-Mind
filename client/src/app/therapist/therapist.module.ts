import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { TherapistRoutingModule } from './therapist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogComponent,
    TherapistDetailsComponent,
  ],
  imports: [
    CommonModule,
    TherapistRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TherapistModule { }
