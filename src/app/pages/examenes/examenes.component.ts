import { Component, OnInit } from '@angular/core';
import { ExamenInterface } from '../../interfaces/examen.interface';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  examenes: ExamenInterface[] = [];
  cargando = false;

  constructor() { }

  ngOnInit(): void {
  }

  borrarAsignatura(examen: ExamenInterface, i: number) {
    console.log('Borrar examen: ', i);
  }
}
