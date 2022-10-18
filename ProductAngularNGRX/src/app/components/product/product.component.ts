import {Component, Input, OnInit} from '@angular/core';

import {Observable, of} from "rxjs";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {catchError, map, startWith} from "rxjs/operators";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionType} from "../../states/product.state";
import { Router} from "@angular/router";
import {DravenSubjectService} from "../../services/dravenSubject.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 allProducts$: Observable<AppDataState<Product[]>> | null = null;

  constructor(private productservice: ProductService, private router:Router,private drivenservice:DravenSubjectService) {
  }

  ngOnInit(): void {
    this.drivenservice.subjectobservable.subscribe((actionEvent:ActionEvent)=>{
this.actionEvent(actionEvent);
    })
  }

  OngetAllProducts() {
    this.allProducts$ = this.productservice.getAllProduct()
      .pipe(map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );


  }

  OngetSelectedProducts() {
    this.allProducts$ = this.productservice.getSelectedProduct()
      .pipe(map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  OngetAvailableProducts() {
    this.allProducts$ = this.productservice.getAvailableProduct()
      .pipe(map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  Onsearch(dataForm: any) {
    this.allProducts$ = this.productservice.searchproduct(dataForm.keyword)
      .pipe(map(data => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  Onselect(p:Product) {
    this.productservice.selectproduct(p).subscribe(data=>{
    p.selected=data.selected;
    })
  }

  onDelete(p:Product) {
    let c=confirm("voulez vous supprimer")
    if(c )
    this.productservice.deleteProduct(p).subscribe(()=>{
this.OngetAllProducts();
    })
  }

  onEdit(i:number) {
    this.router.navigate(['/editproduct/'+i]);
  }

  actionEvent($event:ActionEvent) {
   switch($event.type){
     case ProductActionType.GET_ALL_PRODUCT:
       this.OngetAllProducts(); break
     case ProductActionType.GET_SELECT_PRODUCT:
       this.OngetSelectedProducts();break
     case ProductActionType.GET_AVAILABLAE_PRODUCT:
       this.OngetAvailableProducts();break
     case ProductActionType.SEARCH_PRODUCT:
       this.Onsearch($event.payload) ; break;
     case ProductActionType.SELECT_PRODUCT:
       this.Onselect($event.payload) ; break;
     case ProductActionType.DELETE_PRODUCT:
       this.onDelete($event.payload) ; break;
     case ProductActionType.EDIT_PRODUCT:
       this.onEdit($event.payload) ; break;

   }
  }


}
