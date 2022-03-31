import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

//TODO: Add favicons, and guards

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorString: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email' : new FormControl(null, [ Validators.required ]),
    'password' : new FormControl(null, [ Validators.required ])
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  loginHandler(){
    const data = {
      'email' :this.loginFormGroup.value.email.trim(),
      'password' :this.loginFormGroup.value.password.trim(),
    }

    this.userService.login(data).subscribe({
      next: (res) => this.router.navigate(['/articles']),
      error: (err) => {
        if(err.error.message == 'Incorrect email or password') {
          this.errorString = 'Incorrect email or password'
        } else {
          this.errorString = 'Error'
        }
      }
    })
  }
}
