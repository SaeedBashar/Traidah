import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoggedUserService } from '../logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private user: LoggedUserService,
              private route: Router) { }

  canActivate(route:any, state: RouterStateSnapshot){
     if(this.user.getUser()?.logged_in){
       return true;
     }else{
       this.route.navigate(['/login'], { queryParams: {returnUrl: state.url}});
       return false;
     }
  }
}
