import {Product} from "../models/product.model";
import {ProductActions, ProductActionsType} from "./product.actions";

export enum ProductStateEnum{
  LOADING="loading...",
  LOADED="loaded",
  ERRORS="errors",
  INITIAL="initialiser"
}
export interface ProductState {
  products:Product[],
  errorMessages:string,
  dataState:ProductStateEnum
}
const initState:ProductState={
  products:[],
    errorMessages:"",
    dataState:ProductStateEnum.INITIAL
}
export  function ProductReducer(state:ProductState=initState,action:ProductActions) {
  switch (action.type) {
    case ProductActionsType.GET_ALL_PRODUCT:
      return{...state,dataState:ProductStateEnum.LOADING}
    case ProductActionsType.GET_ALL_PRODUCT_SUCCESS:
      return{...state,dataState:ProductStateEnum.LOADED,products:action.payload}
    case ProductActionsType.GET_ALL_PRODUCT_ERROS:
      return{...state,dataState:ProductStateEnum.ERRORS,errorMessages:action.payload}
    default:
      return{...state}
  }
}
