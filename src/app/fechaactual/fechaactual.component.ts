import { Component } from '@angular/core';


@Component({
    standalone: true,
    selector: 'app-fechaactual',
    imports: [],
    templateUrl: './fechaactual.component.html',
    styleUrl: './fechaactual.component.css'
})

export class FechaactualComponent {
      hoy: any = new Date();          
}