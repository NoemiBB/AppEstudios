import { Component, OnInit } from '@angular/core';
import { AsignaturasInterface } from '../../interfaces/asignaturas.interface';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: AsignaturasInterface[] = [];
  cargando = false;

  constructor() { }

  ngOnInit(): void {
  }

  borrarAsignatura(id: string) {
    console.log(`Borrar asignatura ${id}`);
  }

}
