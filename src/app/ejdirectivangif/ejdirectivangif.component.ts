import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejdirectivangif',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './ejdirectivangif.component.html',
  styleUrl: './ejdirectivangif.component.css'
})
export class EjdirectivangifComponent {
  nombre !: string
  capital !: string; 

  setResultado(){
    return this.capital === "Madrid" ? true : false;
  }

}
