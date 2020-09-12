import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { HomeComponent } from './pages/home/home.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { AsignaturasComponent } from './pages/asignaturas/asignaturas.component';
import { AsignaturaComponent } from './pages/asignatura/asignatura.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'alumno/:id', component: AlumnoComponent},
  {path: 'asignaturas', component: AsignaturasComponent},
  {path: 'asignatura/:id', component: AsignaturaComponent},
  {path: 'examenes', component: ExamenesComponent},
  {path: 'examen/:id', component: ExamenComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
