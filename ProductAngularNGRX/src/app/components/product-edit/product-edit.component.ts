import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, CanActivate} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
productid=0;
  // @ts-ignore
 productForm: FormGroup ;

  constructor(private productservice:ProductService,
              private activeroute:ActivatedRoute,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.productid=this.activeroute.snapshot.params['id'];
    this.initForm();
  }
  initForm(){

    this.productservice.getProduct(this.productid).subscribe(data=>{this.productForm=this.fb.group({
      id:[data.id,Validators.required],
      name:[data.name,Validators.required],
      currentPrice:[data.currentPrice,Validators.required],
      quantity:[data.currentPrice,Validators.required],
      selected:[data.selected,Validators.required],
      available:[data.available,Validators.required]
    })

    })
  }

  onEditProduct() {
this.productservice.editProduct(this.productForm.value).subscribe(()=>{
  alert("success")
})
  }
}
