import { AsignaturasInterface } from './asignaturas.interface';

export interface ExamenInterface {
    id: number;
    alumno: string;
    curso: string;
    asignatura: AsignaturasInterface[];
    fecha: Date;
    tema: string;
    nota?: string;
    observaciones?: string;
}

