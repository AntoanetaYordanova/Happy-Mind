import { HttpErrorResponse } from "@angular/common/http";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../core/auth.service";

const passwordPattern: RegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
const forbiddenCharactersPatters: RegExp = /[^a-zA-Z0-9]+/;

export function passwordCheck(passwordFormControl:AbstractControl) {
    if(!passwordPattern.test(passwordFormControl.value)) {
        return {
            isInvalidPassword : true
        };
    } else {
        return null;
    }
}

export function hasForbiddenCharacters(passwordFormControl:AbstractControl) {
    if(forbiddenCharactersPatters.test(passwordFormControl.value)) {
        return {
            hasForbiddenCharacters : true
        };
    } else {
        return null;
    }
}

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
