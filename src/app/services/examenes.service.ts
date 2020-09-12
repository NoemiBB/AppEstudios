import { Injectable } from '@angular/core';
import { ExamenInterface } from '../interfaces/examen.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  examenes: ExamenInterface[];
  constructor() { }

  getExamen( id: string ) {

  }
}
