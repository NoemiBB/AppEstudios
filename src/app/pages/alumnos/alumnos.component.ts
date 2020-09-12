import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
// import { AlumnoInterface } from '../../interfaces/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: AlumnoModel[] = [];
  cargando = false;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.alumnosService.getAlumnos()
      .subscribe(datos => {
        this.alumnos = datos;
        this.cargando = false;
      });
  }

  borrarAlumno(alumno: AlumnoModel, i: number) {
    
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ alumno.nombre }`,
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, borrarlo',
      
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'No borrarlo'
      // type: 'question',
    }).then( resp => {
      if ( resp.value ) {
        // this.heroes.splice(i, 1);
        this.alumnos.splice(i, 1);
        this.alumnosService.borrarAlumno( alumno.id ).subscribe();
        // Swal.fire('¡Registro borrado!');
      }
    });
  }

}
