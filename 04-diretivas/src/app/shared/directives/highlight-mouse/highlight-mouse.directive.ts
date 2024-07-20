import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  constructor() {}

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.backgroundColor') get getColor() {
    return this.backgroundColor;
  }
  private backgroundColor!: string;
}
