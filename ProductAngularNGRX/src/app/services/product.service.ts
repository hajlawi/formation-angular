import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products")
  }

  getSelectedProduct(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?selected=true")
  }

  getAvailableProduct(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?available=true")
  }

  searchproduct(keyword: string): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?name_like=" + keyword);
  }

  selectproduct(product: Product): Observable<Product> {
    let host = environment.host;
    product.selected = !product.selected;
    return this.http.put<Product>(host + "/products/" + product.id, product);
  }

  deleteProduct(product: Product): Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + "/products/" + product.id);
  }

  saveProduct(product: Product) {
    let host = environment.host;

    return this.http.post<Product>(host + "/products", product);
  }
  getProduct(id: number) {
    let host = environment.host;

    return this.http.get<Product>(host + "/products/"+id);
  }
  editProduct(product: Product) {
    let host = environment.host;

    return this.http.put<Product>(host + "/products/"+product.id, product);
  }
}
