import { Component, OnInit } from '@angular/core';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-arrow',
  templateUrl: './scroll-arrow.component.html',
  styleUrls: ['./scroll-arrow.component.css']
})
export class ScrollArrowComponent implements OnInit {
  faCircleArrowUp = faCircleArrowUp;

  constructor() { }

  ngOnInit(): void {
  }

  scrollHandler(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
