import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { passwordMatch } from '../utils';

//TODO: Add favicons, better password validator and guards

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorString: string = '';

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
    private router: Router
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
        } else {
          this.errorString = 'Error'
        }
      }      
    }) 
  }
}
