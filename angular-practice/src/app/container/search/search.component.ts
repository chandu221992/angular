import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  searchTextChangedEvent: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChangedEvent.emit(this.searchText);
  }
  searchProduct(inputElement: HTMLInputElement) {
    this.searchText = inputElement.value;
    
  }
}
