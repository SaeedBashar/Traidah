import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggedUserService } from '../logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminrouteProtectService implements CanActivate {

  constructor(private user: LoggedUserService,
              private route: Router) { }

  canActivate(){
     if(this.user.getUser()?.role == 0){
       this.route.navigate(['/']);
       return false;
     }else{
       return true;
     }
  }
}
