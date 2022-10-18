import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionType} from "../../../states/product.state";
import {Observable} from "rxjs";
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Output() productEventEmetter:EventEmitter<ActionEvent> =new EventEmitter();
  @ Input()inputallProducts$: Observable<AppDataState<Product[]>> | null = null;
   readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

  Onselect(p: Product) {
    this.productEventEmetter.emit({type:ProductActionType.SELECT_PRODUCT,payload:p})
  }

  onDelete(p: Product) {
    this.productEventEmetter.emit({type:ProductActionType.DELETE_PRODUCT,payload:p})
  }

  onEdit(i: number) {
    this.productEventEmetter.emit({type:ProductActionType.EDIT_PRODUCT,payload:i})
  }
}
