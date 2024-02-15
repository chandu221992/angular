import { Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @ContentChildren(TestComponent)
  testComponent: QueryList<TestComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  showContentChildren() {
 this.testComponent.forEach(e=>console.log(e));
  }

}
