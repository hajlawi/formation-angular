import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
// @ts-ignore
  authStatus:boolean;
  constructor(private authservice:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.authStatus=this.authservice.isAuth;
  }
  onSignIn(){
    this.authservice.singIn().then(()=>{

      this.authStatus=this.authservice.isAuth;
      console.log("connection reussite");
      this.route.navigate(['appareil'])

    }).catch(()=>{
      console.log("connection reffusé");
    });
  }
  onSignOut(){
    this.authservice.singOut();
    this.authStatus=this.authservice.isAuth;
  }

}
