import { Component } from '@angular/core';
import { FechaactualComponent } from '../fechaactual/fechaactual.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [FechaactualComponent, DatePipe],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.css'
})
export class CopyrightComponent {
  copyright: String = '© ACME S.A.';
  hoy: any = new Date();
}
