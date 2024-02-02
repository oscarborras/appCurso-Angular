import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [NgClass,NgIf],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})


export class HijoComponent implements OnInit {
  @Input() aviso !: string;
  //public aviso: string = 'Este texto proviene del componente hijo';
  @Output() mensajeMarcado = new EventEmitter();

  leido: boolean = false;
  mensaje !: string;
  
  marcar() {
      this.leido = !this.leido;
  }
  
  detectar(event: any) {
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje);
  }

  constructor() { }
  ngOnInit() {  }
}

