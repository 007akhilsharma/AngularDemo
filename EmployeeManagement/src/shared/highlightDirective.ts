import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[Highlight]'
})
export class HighlightDirective{
    @Input() highlightColor:any;
    constructor(private elementRef: ElementRef){

        elementRef.nativeElement.style.backgroundColor = "pink";
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.elementRef.nativeElement.style.backgroundColor = "yellow";
    }
}