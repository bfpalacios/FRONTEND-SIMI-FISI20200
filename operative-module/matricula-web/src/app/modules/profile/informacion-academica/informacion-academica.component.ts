import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { PersonaUsuario } from 'src/app/models/PersonaUsuario';

@Component({
  selector: 'app-informacion-academica',
  templateUrl: './informacion-academica.component.html'
})
export class InformacionAcademicaComponent implements OnInit {

  public user: PersonaUsuario;
  constructor(
    private dataService: DataServiceService,
  ) { 
    this.user = new PersonaUsuario();
  }

  ngOnInit() {
    this.obtenerInformacionAcademica();
  }


  private obtenerInformacionAcademica() {
    this.dataService.obtenerInformacionAcademica().subscribe(data => {
      if (data !== null) {
        this.user = data;
      }
    });
  }

}
