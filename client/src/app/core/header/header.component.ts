import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerImage: String = '/assets/images/Lotus-Flower.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
