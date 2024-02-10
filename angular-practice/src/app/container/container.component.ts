import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  setSearchText(value: string) {
    this.searchText = value;
  }
}
