import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apertura } from 'src/app/domain/Apertura';
import { AperturaDTO } from 'src/app/domain/AperturaDTO';
import { IdiomaDTO } from 'src/app/domain/IdiomaDTO';
import { Nivel } from 'src/app/domain/Nivel';
import { Curso } from 'src/app/domain/Curso';
import { Grupo } from 'src/app/domain/Grupo';
import { Hora } from 'src/app/domain/Hora';

import { SolicitudAperturaService } from 'src/app/services/periodo-academico/solicitud-apertura.service';
import { IdiomaService } from 'src/app/services/periodo-academico/idioma.service';
import { NivelService } from 'src/app/services/periodo-academico/nivel.service';
import { CursoService } from 'src/app/services/periodo-academico/curso.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GrupoService } from 'src/app/services/periodo-academico/grupo.service';
import { HoraService } from 'src/app/services/periodo-academico/hora.service';

@Component({
  selector: 'app-solicitar-apertura-curso',
  templateUrl: './solicitar-apertura-curso.component.html',
  styleUrls: ['./solicitar-apertura-curso.component.css']
})
export class SolicitarAperturaCursoComponent implements OnInit {

  public aperturaDTO: AperturaDTO[];
  public aperturaDTO2: AperturaDTO[];
  public apertura: Apertura;
  public nivel: Nivel[];
  public idiomaDTO: IdiomaDTO[];
  public curso: Curso[];
  public grupo: Grupo[];
  public hora: Hora[];
  public load: boolean;

  public selectedTypeIdNivel: number;
  public selectedTypeIdIdioma: number;
  public selectedTypeIdCurso: number;
  public selectedTypeIdDias: number;
  public selectedTypeIdGrupo: number;
  public id: number;
  desactivado = true;

  constructor(private serviceApertura: SolicitudAperturaService, private serviceIdioma: IdiomaService, private serviceNivel: NivelService, private serviceCurso: CursoService, private serviceData: DataServiceService, private serviceGrupo: GrupoService, private serviceHora: HoraService) {
    this.apertura = new Apertura();
    this.apertura.codEstudiante = this.serviceData.user.codigo;
  }

  ngOnInit() {
    console.log(this.serviceData.user.codigo);
    this.getApertura();
    this.getIdioma();
    this.getAperturabyID();
  }

  public getApertura() {
    this.serviceApertura.getApertura().subscribe(data => {
      this.aperturaDTO = data;
      console.log(this.aperturaDTO);

    }, error => {
      console.log(error);
    });
  }

  public getAperturabyID() {
    this.serviceApertura.getAperturabyID(this.serviceData.user.codigo).subscribe(data => {
      this.aperturaDTO2 = data;
      console.log(this.aperturaDTO2);

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

  public getNivel() {
    this.serviceNivel.getNivelbyIdioma(this.selectedTypeIdIdioma).subscribe(data => {
      this.nivel = data;
      console.log(this.nivel);
    }, error => {
      console.log(error);
    });
  }

  public getCurso() {

    this.serviceCurso.getCursobyNivel(this.selectedTypeIdIdioma, this.selectedTypeIdNivel).subscribe(data => {
      this.curso = data;
      console.log(this.curso);
    }, error => {
      console.log(error);
    });
  }

  public getGrupo() {
    this.serviceGrupo.getGrupo().subscribe(data => {
      this.grupo = data;
      console.log(this.grupo);

    }, error => {
      console.log(error);
    });
  }

  public getHora() {
    this.serviceHora.getHorabyGrupo(this.selectedTypeIdDias).subscribe(data => {
      this.hora = data;
      console.log(this.hora);
    }, error => {
      console.log(error);
    });
  }

  public crearApertura() {
    this.apertura.idCurso = this.selectedTypeIdCurso;
    this.apertura.idHorarioGrupohorario = this.selectedTypeIdGrupo;

    this.serviceApertura.crearApertura(this.apertura).subscribe(data => {
      this.apertura = data;
      console.log(this.apertura);
    }, error => {
      console.log(error);
    });

    this.ngOnInit();
  }

  public unirseApertura(selectedTypeIdCurso, selectedTypeIdGrupo) {
  this.apertura.idCurso = selectedTypeIdCurso;
   this.apertura.idHorarioGrupohorario = selectedTypeIdGrupo;

   this.serviceApertura.crearApertura(this.apertura).subscribe(data => {
   this.apertura = data;
    console.log(this.apertura);
  }, error => {
  console.log(error);
  });

    this.ngOnInit();
   }

  public validar(){
    let cont : number = 0;
    for(let i in this.aperturaDTO2){
      if(this.selectedTypeIdCurso == this.aperturaDTO2[i].idCurso && this.selectedTypeIdGrupo == this.aperturaDTO2[i].idGrupohorario){
        cont = cont + 1;
      }
    }

    if(cont > 0){
      console.log("Solicitud existente");
    }else{
      this.crearApertura();
      console.log("Registro con éxito");
    }
  }

  public validarUnion(selectedTypeIdCurso, selectedTypeIdGrupo){
    let cont : number = 0;
    for(let i in this.aperturaDTO2){
      if(selectedTypeIdCurso == this.aperturaDTO2[i].idCurso && selectedTypeIdGrupo == this.aperturaDTO2[i].idGrupohorario){
        cont = cont + 1;
      }
    }

    if(cont > 0){
      console.log("Solicitud existente");
    }else{
     this.unirseApertura(selectedTypeIdCurso, selectedTypeIdGrupo );
      console.log("Registro con éxito");
    }
  }
}
