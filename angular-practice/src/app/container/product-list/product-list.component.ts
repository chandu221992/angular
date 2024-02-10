import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [
    {
      id: 1,
      name: "iphone",
      description: "iphone15",
      brand: "Applee",
      category: "SamrtPhone",
      size: "6.7",
      color: ["Red", "Silver", "Gold"],
      price: "1000$",
      is_in_inventory: true,
      items_left: 10,
      image_url: "./././/assets/images/iphone.jpeg"
    },
    {
      id: 2,
      name: "Google Pixel",
      description: "Google Pixel Pro",
      brand: "Google",
      category: "SamrtPhone",
      size: "7.1",
      color: ["Blue", "Obsedian", "Silver", 'Black'],
      price: "500$",
      is_in_inventory: false,
      items_left: 5,
      image_url: "./././assets/images/pixel.jpeg"
    }
  ];
  totalProductsCount: number = this.products.filter(p => this.searchText === '' || p.name.includes(this.searchText)).length;
  inStockProductCount: number = this.products.filter(p => p.is_in_inventory && (this.searchText || p.name.includes(this.searchText))).length;
  outOfStockProductCount: number = this.products.filter(p => !p.is_in_inventory && (this.searchText || p.name.includes(this.searchText))).length;
  selectedRadioButton: string = 'All';
  @Input()
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }
  onFilterRadioButtonChanged(value: string) {
    this.selectedRadioButton = value;
    console.log(this.selectedRadioButton);
  }

}
