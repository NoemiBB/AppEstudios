import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AlumnoModel } from '../../models/alumno.model';

// import { AlumnoInterface } from '../../interfaces/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';
import { from, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno = new AlumnoModel();

  constructor(private activatedRouter: ActivatedRoute,
              private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.alumnosService.getAlumno(id)
        .subscribe( (resp: AlumnoModel) => {
          this.alumno = resp;
          this.alumno.id = id;
        });
    }
  }

  guardar( form: NgForm) {
    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.alumno.id) {
      peticion = this.alumnosService.actualizarAlumno(this.alumno);
    } else {
      peticion = this.alumnosService.crearAlumno(this.alumno);
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.alumno.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }
}
