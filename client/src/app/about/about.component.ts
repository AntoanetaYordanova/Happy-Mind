import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgPath : String = 'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  // imgSource : String = 'https://unsplash.com/s/photos/self-care'
  constructor() { }

  ngOnInit(): void {
  }

}
