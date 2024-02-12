import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @ViewChild(ProductListComponent)
  productListComp:ProductListComponent;
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  setSearchText(value: string) {
    this.searchText = value;
  }
}
