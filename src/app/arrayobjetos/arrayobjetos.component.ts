import { Component } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-arrayobjetos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './arrayobjetos.component.html',
  styleUrl: './arrayobjetos.component.css'
})

export class ArrayobjetosComponent {
  public alumnos: Array<Alumno> = [
    {id: 1 , nombre: 'Juan', apellidos: 'Gutierrez', ciudad: 'Madrid'},
    {id: 2 , nombre: 'Pedro', apellidos: 'Lopez', ciudad: 'Sevilla'},
    {id: 3 , nombre: 'Oscar', apellidos: 'BA', ciudad: 'Sevilla'}
  ];
}
