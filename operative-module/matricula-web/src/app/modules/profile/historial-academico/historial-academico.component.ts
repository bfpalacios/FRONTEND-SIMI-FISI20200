import { Component, OnInit, ViewChild } from '@angular/core';
import { HistorialDatosAlumnoComponent } from '../historial-academica/historial-datos-alumno/historial-datos-alumno.component';

@Component({
  selector: 'app-historial-academico',
  templateUrl: './historial-academico.component.html',
  styleUrls: ['./historial-academico.component.css']
})
export class HistorialAcademicoComponent implements OnInit {

  public load: boolean;
  constructor() {
   }

  ngOnInit() {
  }

}
