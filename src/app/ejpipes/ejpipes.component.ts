import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, I18nSelectPipe, UpperCasePipe } from '@angular/common';
import { EuroPipe } from '../euro.pipe';


@Component({
  selector: 'app-ejpipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe,DecimalPipe,CurrencyPipe,I18nSelectPipe,EuroPipe],
  templateUrl: './ejpipes.component.html',
  styleUrl: './ejpipes.component.css'
})

export class EjpipesComponent {
  hoy: any = new Date();  
  ciudad: string = "Sevilla";
  resultado: number = 1.148;
  dolareuro: number = 0.94;
  
  nombre: string = 'Laura';
  sexo: string = 'mujer';
  encabezamiento: any = { 'hombre':'Estimado', 'mujer':'Estimada' }
}
