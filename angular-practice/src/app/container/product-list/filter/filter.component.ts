import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @ViewChildren('filterInputElement')
  radioButtonInput: QueryList<ElementRef>;
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
    this.radioButtonInput.filter(f => f.nativeElement.value === this.selectedRadioButton).forEach((f) => this.onRadioButtonChangedEvent.emit(f.nativeElement.value));
  }

}
