import {Action} from "@ngrx/store";

export  enum  ProductActionsType {
  GET_ALL_PRODUCT="[Product]",
GET_ALL_PRODUCT_SUCCESS="[Product]",
GET_ALL_PRODUCT_ERROS="[Product]"

}
export class GetAllProductActions implements Action{
  type: ProductActionsType=ProductActionsType.GET_ALL_PRODUCT;
constructor(public payload:any){}
}
export class GetAllProductActionsSuccess implements Action{
  type: ProductActionsType=ProductActionsType.GET_ALL_PRODUCT_SUCCESS;
  constructor(public payload:string){}
}
export class GetAllProductActionsErrors implements Action{
  type: ProductActionsType=ProductActionsType.GET_ALL_PRODUCT_ERROS;
  constructor(public payload:string){}
}
export type  ProductActions=GetAllProductActions|GetAllProductActionsSuccess|GetAllProductActionsErrors;
