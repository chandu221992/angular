import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  addToCart: number = 0;
  product = {
    name:"iphone",
    price: 798,
    color: "Blue",
    discount: 8.5,
    imagePath: "/assets/images/iphone.jpeg",
    inStock: true
  }

  constructor() { }

  ngOnInit(): void {
  }
  decrementAddToCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--
      this.product.inStock = true;
    }
  }
  incrementAddToCartValue() {
    if (this.addToCart < 10) {
      this.addToCart++
    } else {
      this.product.inStock = false;
    }

  }

}
