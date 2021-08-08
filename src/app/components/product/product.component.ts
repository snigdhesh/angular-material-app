import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName:string;
  @Output() productClickEvent=new EventEmitter();

  constructor() {  }

  ngOnInit() {
  }

  productClicked(){
    this.productClickEvent.emit();
  }

}
