import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;

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
