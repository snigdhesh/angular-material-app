import { Injectable } from '@angular/core';
import { User } from './IUserModel';
import { AuthData } from './IAuthData';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;
  subject= new Subject<boolean>; //Don't make it private, cause we are using this in header.component.ts

  constructor() { }

  registerUser(authData: AuthData){
    this.user={
      email: authData.email,
      id: Math.round(Math.random() * 1000).toString()
    }
    this.subject.next(true); //This will emit and event (we use subject in service class, instead of EventEmitter class)
  }

  login(authData: AuthData){
    this.user={
      email: authData.email,
      id: Math.round(Math.random() * 1000).toString()
    }
    console.log("logged in user",this.user)
    this.subject.next(true); //This will emit and event (we use subject in service class, instead of EventEmitter class)
  }

  logout(){
    this.user = null;
    this.subject.next(false); //This will emit and event (we use subject in service class, instead of EventEmitter class)
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user!=null; //If user is not null, it's authorized, else unauthorized
  }
}
