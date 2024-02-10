import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  onRadioButtonChangedEvent: EventEmitter<string> = new EventEmitter<string>();
  selectedRadioButton: string = 'All'
  onRadioButtonChanged() {
    this.onRadioButtonChangedEvent.emit(this.selectedRadioButton);
  }

}
