import { Component, OnInit, Input } from '@angular/core';
import { PersonaUsuario } from 'src/app/models/PersonaUsuario';

@Component({
  selector: 'app-informacion-alumno',
  templateUrl: './informacion-alumno.component.html',
  styleUrls: ['./informacion-alumno.component.css']
})
export class InformacionAlumnoComponent implements OnInit {

  public show: boolean;
  @Input() public user: PersonaUsuario;
  constructor() { 
    this.show = false;
  }

  ngOnInit(): void {
  }

  public mostrarInformacionAcademica() {
    this.show = !this.show;
  }

  public mostrarInformacionPersonal() {
    this.show = !this.show;
  }
  

}
