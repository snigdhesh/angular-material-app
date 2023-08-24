import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products=['A Book'];
  productsUpdated=new Subject<void>();

  constructor() { }

  addProduct(productName:string){
    this.products.push(productName);
    this.productsUpdated.next();
  }

  getProducts(){
    return [...this.products];
  }

  deleteProduct(productName:string){
    this.products=this.products.filter(product=>product!==productName);
    this.productsUpdated.next();
  }
}
