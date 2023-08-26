import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName;
  productList;
  isEnabled = true;

  private productSubscription: Subscription;

  productsForm = new FormGroup({
    productName: new FormControl('',Validators.required),
  });

  constructor(private productService: ProductService) {}

  //ngOnInit will be executed, during component initialization, after component creation.
  //We need constructor for component creation. Which means constructor runs, first. Then ngOnInit()
  ngOnInit() {
    this.productList = this.productService.getProducts();

    //subscribe() method will return a subscription object.
    //We use this subscription object to close the subscription, when component is destroyed.
    this.productSubscription = this.productService.productsUpdatedSubject.subscribe(
        //Following statement will be executed unlimited amount of times, whenever changes occur
        () => (this.productList = this.productService.getProducts())
      );
  }
  addProduct() {
    if(this.productsForm.valid){
      //other way: this.productList.push(this.productName);
      //Better way: Is shown below
      console.log(this.productsForm.value);
      //this.productList.push(this.productsForm.value["productName"]);
      this.productService.addProduct(this.productsForm.value["productName"]);
    }
  }

  /**
   * TODO: I think this method is not getting triggered, do a POC to see how this ngOnDestroy() method works.
   * This method runs when component is destroyed
   */
  ngOnDestroy() {
    console.log("In ngOnDestroy method");
    this.productSubscription.unsubscribe();
  }
}
