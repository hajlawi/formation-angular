import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuth=false;
  constructor() { }
  singIn(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        this.isAuth=true;
        resolve(true);
      },2000);
    });
  }
  singOut(){
    this.isAuth=false;
  }

}
