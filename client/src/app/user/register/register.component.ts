import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { passwordMatch } from '../utils';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/auth.service';

//TODO:  better password validator 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  
  errorString: string = '';
  hasErrors: boolean = true;

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(6)]);

  registerFormGroup: FormGroup =  this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'passwords': new FormGroup({
      'password' : this.passwordControl,
      'rePass' : new FormControl(null, passwordMatch(this.passwordControl))
    })
  })
  
  get passwordGroup(){
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  registerHandler(){
    const data = {
      email: this.registerFormGroup.value.email,
      password: this.passwordGroup.value.password
    }

    this.userService.register(data).subscribe({
      next: () => this.router.navigate(['/articles']),
      error: (err) => {
        if(err.error.message == 'Email already exists'){
          this.errorString = err.error.message
        } else if (err.status == 498) {
          this.authService.removeUser();
          this.router.navigate(['/user/login']);
        } else {
          this.hasErrors = true;
        }  
      }      
    }) 
  }
}
