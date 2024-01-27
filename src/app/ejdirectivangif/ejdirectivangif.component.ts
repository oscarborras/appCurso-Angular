import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent {
  nombre: string = ""; //En Angular 13 es obligatorio inicializar la propiedad
  capital: string = ""; 

  setResultado(){
      return this.capital === "Madrid" ? true : false;  
  }


}
