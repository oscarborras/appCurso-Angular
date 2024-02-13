import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})

export class InterpolacionComponent {
  texto: string = "Oscar"

  constructor() {
    setTimeout(() => {
      this.texto = "Ana";
    }, 2000);
  }
}
