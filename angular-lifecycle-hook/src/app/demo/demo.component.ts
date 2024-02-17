import { OnDestroy } from '@angular/core';
import { ContentChild } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message: string = '';
  @ViewChild('demoPara') para: ElementRef;
  @ContentChild('tempPara') tempPara:ElementRef;

    constructor() {
      console.log('Demo Component Constructor Called');
    }

  ngDoCheck(): void {
    console.log('ngDoCheck of DemoComponent called',this.tempPara);
  }
  ngOnChanges(): void {
    console.log('ngOnChanges of DemoComponent called')
  }
  ngOnInit(): void {
    console.log('ngOnInit of DemoComponent called')
  }

  ngAfterViewChecked(): void {
    console.log('inside DemoComponent ngAfterViewChecked', this.para.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('inside DemoComponent ngAfterViewInit', this.para.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('inside DemoComponent ngAfterContentChecked', this.tempPara);
  }
  ngAfterContentInit(): void {
    console.log('inside DemoComponent ngAfterContentInit', this.tempPara.nativeElement);
  }
  ngOnDestroy(): void {
    console.log('inside DemoComponent ngOnDestroy');
  }

}

