import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=[
    {
      id:1,
      name:"iphone",
      description:"iphone15",
      brand:"Apple",
      category:"SamrtPhone",
      size:"6.7",
      color:["Red","Silver","Gold"],
      price:"1000$",
      is_in_inventory:'yes',
      items_left:10,
      image_url:"./././/assets/images/iphone.jpeg"
    },
    {
      id:2,
      name:"Google Pixel",
      description:"Google Pixel Pro",
      brand:"Google",
      category:"SamrtPhone",
      size:"7.1",
      color:["Blue","Obsedian","Silver",'Black'],
      price:"500$",
      is_in_inventory:'yes',
      items_left:5,
      image_url:"./././assets/images/iphone.jpeg"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


}
