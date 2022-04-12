import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { UserService } from '../user.service';
import { errorHandler } from '../../utils/utils';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  hasErrors: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
     ) { }

  ngOnInit(): void {    
    this.userService.logout().subscribe({
      error: (err) => errorHandler(err, this.router, this.authService, this.hasErrors) 
    });
    this.router.navigate(['/home']);
  }
}
