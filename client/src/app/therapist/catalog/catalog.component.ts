import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { ITherapistProfile } from 'src/app/interfaces/TherapistProfile';
import { errorHandler } from 'src/app/user/utils';
import { TherapistService } from '../therapist.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  data!: ITherapistProfile[] | undefined;
  hasErrors: boolean = false;

  constructor(
    private therapistService: TherapistService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.data = undefined;
    this.therapistService.getAll()
    .pipe(tap((data) => this.data = data))
    .subscribe({
      error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors)
    });    
  }

}
