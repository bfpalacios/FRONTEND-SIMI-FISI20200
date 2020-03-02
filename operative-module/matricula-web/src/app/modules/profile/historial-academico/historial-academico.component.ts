import { Component, OnInit } from '@angular/core';

import {HistorialService} from 'src/app/services/profile/historial.service';
import {NotaDTO} from 'src/app/domain/NotaDTO';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-historial-academico',
  templateUrl: './historial-academico.component.html'
})
export class HistorialAcademicoComponent implements OnInit {
  public nota : NotaDTO[];
  public load: boolean;
  constructor(private serviceHistorial : HistorialService, private serviceData: DataServiceService) {
   }

  ngOnInit() {
    this.getHistorialbyID();
  }

  public getHistorialbyID(){
    this.serviceHistorial.getNotabyID(this.serviceData.user.id).subscribe(data => {
      this.nota = data;
      console.log(this.nota);
    }, error =>{
      console.log(error);
    });
  }

}
