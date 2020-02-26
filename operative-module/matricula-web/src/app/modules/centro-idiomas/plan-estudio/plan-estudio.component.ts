import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/services/centro-idiomas/plan-estudio.service';
import { IdiomaDTO } from 'src/app/domain/IdiomaDTO';
import { IdiomaService } from 'src/app/services/periodo-academico/idioma.service';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})
export class PlanEstudioComponent implements OnInit {

  public planes: any[];
  public idiomaDTO: IdiomaDTO[];
  public cantidad : any[];
  constructor(private servicePlan: PlanEstudioService, private serviceIdioma: IdiomaService) { }
  ngOnInit() {
    this.getPlanEstudio();
    this.getIdioma();
    this.idiomas();
  }

  public getPlanEstudio() {
    this.servicePlan.getPlanDeEstudios().subscribe(data => {
      this.planes = data;
      console.log(this.planes);
    }, error => {
      console.log(error);
    });
  }

  public getIdioma() {
    this.serviceIdioma.getIdioma().subscribe(data => {
      this.idiomaDTO = data;
      console.log(this.idiomaDTO);

    }, error => {
      console.log(error);
    });
  }
  // public algoclic(id){
  //   var o ={};
  //   for(var i in this.aperturaDTO){
  //       if(this.aperturaDTO[i].idApertura=id){
  //         o=this.aperturaDTO[i];
  //       }
  //   }
  public idiomas() {
    var c = 0;
    var cant = [];
    for(var i in this.idiomaDTO){
      for(var j in this.planes){
        if(this.idiomaDTO[i].nom_Idioma = this.planes[j].nom_Idioma){
        c = c + 1;
        console.log(c);
      }
      else
      {
        cant.push(c);
        //this.cantidad.push(c);
        c = 0;
      }
    }
  }
  console.log(cant);
  }
}
