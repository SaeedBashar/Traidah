import { Injectable } from '@angular/core';
import { loggedInUserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  userData!:loggedInUserData | null;

  constructor() { }

  setUser(el:loggedInUserData | null){
    this.userData = el;
  }

  getUser(): loggedInUserData | null{
    // console.log("from service get", this.userData)
    return this.userData;
  }
}
