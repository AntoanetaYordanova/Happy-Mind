import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        query('.animation', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger('450ms', [
            animate('700ms 0.4s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  imgPath : String = 'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  constructor() { }

  ngOnInit(): void {
  }

}
