import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.showArrow') showArrow!: boolean;
  
  @HostListener('window:scroll') onScroll(){

    if(window.scrollY > 380) {
      this.showArrow = true;
    } else {
      this.showArrow = false;
    }
  }
}
