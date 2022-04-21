import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: 'translateX(-40px)' }),
          stagger('400ms', [
            animate('800ms 0.5s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true }),
        
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{

  constructor(private authService: AuthService){}

  backgroundImage: String = 'https://images.unsplash.com/photo-1559608622-d443df453289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

  ngOnInit(): void {
  }
}
