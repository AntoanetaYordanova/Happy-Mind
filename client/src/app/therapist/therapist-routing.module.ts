import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { TherapistDetailsComponent } from './therapist-details/therapist-details.component';

const routes: Routes = [
  {
    path : 'catalog',
    component: CatalogComponent,
    data : {
      title : 'Therapists'
    }
  },
  {
    path: ':id',
    component: TherapistDetailsComponent,
    data: {
      title : 'Therapist'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistRoutingModule { }

