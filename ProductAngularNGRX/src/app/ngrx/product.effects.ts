import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";

@Injectable()
export  class ProductEffects {
  constructor(private  productservice:ProductService){}

}
