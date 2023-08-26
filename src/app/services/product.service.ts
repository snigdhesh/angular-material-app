import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products=['A Book (default object)'];
  productsUpdatedSubject=new Subject<void>();
  //A Subject is like an event emitter.
  //A Subject is a feature coming from 'rxjs' library

  constructor() { }

  addProduct(productName:string){
    this.products.push(productName);
    //Here instead of event.emit() like we do in event. We do next() in Subject.
    this.productsUpdatedSubject.next(); //This will emit an notification.
  }

  getProducts(){
    return [...this.products]; 
    //This syntax creates new copy of this.products. 
    //This way, even if object is modified in other classes, content of "products" object in this class, will not be effected.
  }

  deleteProduct(productName:string){
    this.products=this.products.filter(product=>product!==productName);
    this.productsUpdatedSubject.next();//This will emit an notification.
  }
}
