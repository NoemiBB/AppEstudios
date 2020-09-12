import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { from } from 'rxjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { AsignaturasComponent } from './pages/asignaturas/asignaturas.component';
import { AsignaturaComponent } from './pages/asignatura/asignatura.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamenComponent,
    ExamenesComponent,
    AlumnosComponent,
    AlumnoComponent,
    AsignaturasComponent,
    AsignaturaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
