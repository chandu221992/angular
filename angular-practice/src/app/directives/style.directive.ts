import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({ selector: '[changeStyle]' })
export class ChangeStyle implements OnInit{

    constructor(private element:ElementRef,private renderer:Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#fff');
    }


}