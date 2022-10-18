import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppreilComponent } from './appreil/appreil.component';
import {FormsModule} from "@angular/forms";
import {AppreilService} from "./services/appreil.service";
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import {AuthService} from "./services/auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
const appRoutes:Routes=[
  {path:'appareil',component:AppareilViewComponent},
  {path:'auth',component:AuthComponent},
  {path:'',component:AppareilViewComponent},
  {path:'appareil/:id',component:SingleAppareilComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AppreilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [AppreilService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
