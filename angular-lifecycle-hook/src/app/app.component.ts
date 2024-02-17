import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {

  title = 'angular-lifecycle-hook';

  @Input() message: string = '';

  constructor() {
    console.log('App Component Constructor Called');
  }

  setMessage(inputEL: HTMLInputElement) {
    this.message = inputEL.value;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck of AppComponent called')
  }
  ngOnChanges(): void {
    console.log('ngOnChanges of AppComponent called')
  }
  ngOnInit(): void {
    console.log('ngOnInit of AppComponent called')
  }
}
