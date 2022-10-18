export enum ProductActionType {
  GET_ALL_PRODUCT = "[Product] all product",
  GET_SELECT_PRODUCT = "[Product]selected product",
  GET_AVAILABLAE_PRODUCT = "[Product] available product",
  SEARCH_PRODUCT = "[Product] search product",
SELECT_PRODUCT="[Product] ",
  DELETE_PRODUCT="[Product]",
EDIT_PRODUCT="",

}
export  interface ActionEvent {
    type:ProductActionType,
     payload?:any
  
}

export  enum DataStateEnum{
LOADING,
  LOADED,
  ERROR
}
export  interface AppDataState<T> {
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
