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
  addProduct(){
    this.productList.push(this.productName);
  }
  removeProduct(productName:string){
    this.productList=this.productList.filter(product=>product!==productName);
  }

}
