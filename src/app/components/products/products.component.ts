import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName="A book";
  productList=["Book","Laptop","Box"];
  isDisabled=true;

  constructor() { 
    setTimeout(()=>{
      this.isDisabled=false;
    },5000);
  }

  ngOnInit() {
  }
  addProduct(form){
    //this.productList.push(this.productName);
    console.log(form.controls.productName.value);
    this.productList.push(form.controls.productName.value);
  }
  removeProduct(productName:string){
    this.productList=this.productList.filter(product=>product!==productName);
  }

}
