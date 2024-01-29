import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CopyrightComponent,ViewmodeloComponent,EjmetodoComponent, EjpropertybindingComponent, EjeventbindingComponent,Ej2waybindingComponent, EjdirectivangifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCurso 2024';
  destino: string = 'Universo';
}
