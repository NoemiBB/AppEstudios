import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlumnoInterface } from '../interfaces/alumno.interface';
import { AlumnoModel } from '../models/alumno.model';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { delay, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private url = 'https://estudios-7f37a.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearAlumno( alumno: AlumnoModel) {
    return this.http.post(`${this.url}/Alumnos.json`, alumno);
  }

  actualizarAlumno( alumno: AlumnoModel) {
    const alumnoTemp = {
      ...alumno
    };
    delete alumnoTemp.id;
    return this.http.put(`${this.url}/Alumnos/${alumno.id}.json`, alumnoTemp);
  }

  borrarAlumno( id: string) {
    return this.http.delete(`${this.url}/Alumnos/${id}.json`);
  }

  getAlumno( id: string ) {
    return this.http.get(`${this.url}/Alumnos/${id}.json`);
  }

  getAlumnos() {
    return this.http.get<object>(`${this.url}/Alumnos.json`)
        .pipe( map(this.crearArreglo), delay(0));
  }

  private crearArreglo( alumnosObj: object) {
    const alumnos: AlumnoModel[] = [];
    Object.keys( alumnosObj ).forEach( key => {
      const alumno: AlumnoModel = alumnosObj[key];
      alumno.id = key;
      alumnos.push( alumno );
    });
    return alumnos;
  }

}
