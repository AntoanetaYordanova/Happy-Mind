import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { UserService } from '../user/user.service';

@Injectable()
export class AuthActivate implements CanActivate{
    constructor(private router: Router, private userService: UserService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
        const { authenticationRequired, authenticationFailureRedirect, isLogin } = route.data;
        if(typeof authenticationRequired == 'boolean' && 
            authenticationRequired === this.userService.hasUser){
            return true;
        }

        let authRedirectUrl = authenticationFailureRedirect;
        if(authenticationRequired) {            
            const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s}`, '');
            authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`
        }

        if(isLogin){
            const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s}`, '');
            authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`
        }
        return this.router.parseUrl(authRedirectUrl || '/');   
    }
}