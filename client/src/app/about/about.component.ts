import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgPath : String = 'https://images.unsplash.com/photo-1559608622-d443df453289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  imgSource : String = 'https://unsplash.com/s/photos/self-care'
  constructor() { }

  ngOnInit(): void {
  }

}
