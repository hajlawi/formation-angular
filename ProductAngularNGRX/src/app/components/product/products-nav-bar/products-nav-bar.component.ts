import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionType} from "../../../states/product.state";
import {DravenSubjectService} from "../../../services/dravenSubject.service";


@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
//@Output() productEventEmetter:EventEmitter<ActionEvent> =new EventEmitter();
  constructor(private  drivenService:DravenSubjectService) { }

  ngOnInit(): void {
  }

  OngetAllProducts() {
   // this.productEventEmetter.emit({type:ProductActionType.GET_ALL_PRODUCT})
    this.drivenService.publishedevent({type:ProductActionType.GET_ALL_PRODUCT})
  }

  OngetSelectedProducts() {
   // this.productEventEmetter.emit({type:ProductActionType.GET_SELECT_PRODUCT})
    this.drivenService.publishedevent({type:ProductActionType.GET_SELECT_PRODUCT})
  }

  OngetAvailableProducts() {
    //this.productEventEmetter.emit({type:ProductActionType.GET_AVAILABLAE_PRODUCT})
    this.drivenService.publishedevent({type:ProductActionType.GET_AVAILABLAE_PRODUCT})
  }

  Onsearch(value: any) {
    //this.productEventEmetter.emit({type:ProductActionType.SEARCH_PRODUCT,payload:value})
    this.drivenService.publishedevent({type:ProductActionType.SEARCH_PRODUCT,payload:value})
  }
}
