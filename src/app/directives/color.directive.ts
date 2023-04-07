import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[chiru]'
})
export class ColorDirective {

  constructor(eleRef: ElementRef, rend2:Renderer2) { 
    // eleRef.nativeElement.style.color = 'red'
    // eleRef.nativeElement.style.backgroundColor = 'yellow'
    rend2.addClass(eleRef.nativeElement,'myClass')
  }

}
