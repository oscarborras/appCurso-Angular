import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow-if',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controlflow-if.component.html',
  styleUrl: './controlflow-if.component.css'
})
export class ControlflowIfComponent {
  nombre !: string
  capital !: string; 

  setResultado(){
    return this.capital === "Madrid" ? true : false;
  }
}
