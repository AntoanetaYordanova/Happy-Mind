import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ITherapistProfile } from 'src/app/interfaces/TherapistProfile';
import { TherapistService } from '../therapist.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  data!: ITherapistProfile[]

  constructor(private therapistService: TherapistService) { }

  ngOnInit(): void {
    this.therapistService.getAll().pipe(tap((data) => {
      this.data = data;      
    })).subscribe();    
  }

}
