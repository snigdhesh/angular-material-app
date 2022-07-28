import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName:string;
  @Output() productClickEvent=new EventEmitter();

  constructor(private productService: ProductService) {  }

  ngOnInit() {
  }

  productClicked(){
    //this.productClickEvent.emit();
    this.productService.deleteProduct(this.productName);
  }

}
