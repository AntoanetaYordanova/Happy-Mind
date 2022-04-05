import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerImage: String = '/assets/images/Lotus-Flower.svg'

  get hasUser(){
    return this.authService.getUser();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
