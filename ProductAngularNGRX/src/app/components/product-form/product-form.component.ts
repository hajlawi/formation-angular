import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";

import {Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
// @ts-ignore
  productForm: FormGroup ;
  submitted=false;

  constructor(private fb:FormBuilder,private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
   this.initForm();
  }
initForm(){
  this.productForm= this.fb.group({
    name:["",Validators.required],
    currentPrice:[0,Validators.required],
    quantity:[0,Validators.required],
    selected:[true,Validators.required],
    available:[true,Validators.required]
  })
}

  onSaveProduct() {
this.submitted=true;
this.productservice.saveProduct(this.productForm.value).subscribe(data=>{
  this.router.navigate(['/products']);
})

  }
}
