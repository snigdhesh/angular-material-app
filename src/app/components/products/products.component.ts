import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  productName="A book";
  productList=["Book","Laptop","Box"];
  isEnabled=true;
  
  private productSubscription: Subscription;

  constructor(private productService:ProductService) { 
  }

  ngOnInit() {
    this.productSubscription=this.productService.productsUpdated.subscribe(()=>{
      this.productList=this.productService.getProducts();
    })
  }
  addProduct(form){
    //this.productList.push(this.productName);
    console.log(form.controls.productName.value);
    this.productList.push(form.controls.productName.value);
  }
  removeProduct(productName:string){
    this.productList=this.productList.filter(product=>product!==productName);
  }

  /**
   * TODO: I think this method is not getting triggered, do a POC to see how this ngOnDestroy() method works.
   */
  ngOnDestroy(){
    console.log("In ngOnDestroy method");
    this.productSubscription.unsubscribe();
  }
}
