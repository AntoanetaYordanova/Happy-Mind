import { HttpErrorResponse } from "@angular/common/http";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../core/auth.service";

export function passwordMatch(passwordFormControl: AbstractControl) {
    const validtorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMissmatch: true
            }
        }
        return null;
    }
    return validtorFn;
}

export function errorHandler(err: HttpErrorResponse, router: Router, authService: AuthService, hasErrors: boolean) {
    if (err.status == 498) {
        authService.removeUser();
        router.navigate(['/user/login']);
      } else {
        hasErrors = true;
      }  
}
