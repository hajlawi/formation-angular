import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './components/product/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { SingleProductComponent } from './components/product/products-list/single-product/single-product.component';
const appRoute:Routes=[
  {path:"",component:HomeComponent},
  {path:"products",component:ProductComponent},
  {path:"newproduct",component:ProductFormComponent},
  {path:"editproduct/:id",component:ProductEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
     ProductComponent,
     HomeComponent,
     ProductFormComponent,
     ProductEditComponent,
     ProductsNavBarComponent,
     ProductsListComponent,
     SingleProductComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
