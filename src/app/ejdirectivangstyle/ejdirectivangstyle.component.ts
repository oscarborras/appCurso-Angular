import { Component } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})
export class EjdirectivangstyleComponent {
  puntuacion !: number;

  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red'; 
}

}
