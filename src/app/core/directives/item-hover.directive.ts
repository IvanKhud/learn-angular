import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appItemHover]'
})
export class ItemHoverDirective {
  public highlightColor;
  constructor(private el: ElementRef) {
    this.highlightColor = 'violet';
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('click') onClick() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
