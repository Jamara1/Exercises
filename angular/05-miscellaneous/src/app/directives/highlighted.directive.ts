import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input("appHighlighted") newColor: string = '';

  constructor(private elementRef: ElementRef) {
    console.log("Directive call");
  }

  @HostListener('mouseenter') mouseEnter() {
    this.highlighted(this.newColor);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlighted('');
  }

  private highlighted(color: string = 'yellow') {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
