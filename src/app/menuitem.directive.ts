import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuitem]',
  standalone: true
})
export class MenuitemDirective {

  @HostBinding('class.itemOrange') private mostrar: boolean = false;

  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }

  constructor() {
  }

}
