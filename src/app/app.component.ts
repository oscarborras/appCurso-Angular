import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaactualComponent,CopyrightComponent,ViewmodeloComponent,EjmetodoComponent, EjpropertybindingComponent, EjeventbindingComponent,Ej2waybindingComponent, EjdirectivangifComponent,EjdirectivangstyleComponent,EjdirectivangclassComponent,EjdirectivangforComponent,ArrayobjetosComponent,EjdirectivangswitchComponent,EjmidirectivaComponent,PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCurso 2024';
  destino: string = 'Universo';
}
