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
import { MatDialog } from '@angular/material/dialog';
import { AperturaDialogComponent } from 'src/app/dialogs/matricula/apertura-dialog/apertura-dialog.component';

@Component({
  selector: 'app-solicitar-apertura-curso',
  templateUrl: './solicitar-apertura-curso.component.html'
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
  public loadcito: boolean;
  public selectedTypeIdNivel: number;
  public selectedTypeIdIdioma: number;
  public selectedTypeIdCurso: number;
  public selectedTypeIdDias: number;
  public selectedTypeIdGrupo: number;
  public id: number;
  desactivado = true;

  constructor(
    private serviceApertura: SolicitudAperturaService,
    private serviceIdioma: IdiomaService,
    private serviceNivel: NivelService,
    private serviceCurso: CursoService,
    private serviceData: DataServiceService,
    private serviceGrupo: GrupoService,
    private serviceHora: HoraService,
    private dialog: MatDialog) {
    this.load = true;
    this.loadcito = false;
    this.apertura = new Apertura();
    this.apertura.codEstudiante = this.serviceData.user.codigo;
  }

  ngOnInit() {
    console.log(this.serviceData.user.id);
    this.getApertura();
  }

  public getApertura() {
    this.serviceApertura.getApertura().subscribe(data => {
      this.aperturaDTO = data;
      this.getIdioma();

    }, error => {
      console.log(error);
    });
  }

  public getAperturabyID() {
    this.serviceApertura.getAperturabyID(this.serviceData.user.id).subscribe(data => {
      this.aperturaDTO2 = data;
      this.load = false;

    }, error => {
      console.log(error);
    });
  }

  public getIdioma() {
    this.serviceIdioma.getIdioma().subscribe(data => {
      this.idiomaDTO = data;
      console.log(this.idiomaDTO);
         //this.openDialogEdit();
    this.getAperturabyID();

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
    this.loadcito = true;
    this.serviceNivel.getNivelbyIdioma(this.selectedTypeIdIdioma).subscribe(data => {
      this.nivel = data;
      this.loadcito = false;
      console.log(this.nivel);
    }, error => {
      this.loadcito = false;
      console.log(error);
    });
  }

  public getCurso() {
    this.loadcito = true;
    this.serviceCurso.getCursobyNivel(this.selectedTypeIdIdioma, this.selectedTypeIdNivel).subscribe(data => {
      this.curso = data;
      this.loadcito = false;
      console.log(this.curso);
    }, error => {
      this.loadcito = false;
      console.log(error);
    });
  }

  public getGrupo() {
    this.loadcito = true;
    this.serviceGrupo.getGrupo().subscribe(data => {
      this.grupo = data;
      this.loadcito = false;
      console.log(this.grupo);

    }, error => {
      this.loadcito = false;
      console.log(error);
    });
  }

  public getHora() {
    this.loadcito = true;
    this.serviceHora.getHorabyGrupo(this.selectedTypeIdDias).subscribe(data => {
      this.hora = data;
      this.loadcito = false;
      console.log(this.hora);
    }, error => {
      this.loadcito = false;
      console.log(error);
    });
  }

  public crearApertura() {
    this.apertura.idCurso = this.selectedTypeIdCurso;
    this.apertura.idHorarioGrupohorario = this.selectedTypeIdGrupo;

    this.serviceApertura.crearApertura(this.apertura).subscribe(data => {
      this.apertura = data;
      console.log(this.apertura);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
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
  }


  public openDialogEdit(mensaje: string) {
    const dialogRef = this.dialog.open(AperturaDialogComponent, {
      width: '550px',
      data: mensaje,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public validarUnion(selectedTypeIdCurso, selectedTypeIdGrupo) {
    let cont: number = 0;
    for (let i in this.aperturaDTO2) {
      if (selectedTypeIdCurso == this.aperturaDTO2[i].idCurso && selectedTypeIdGrupo == this.aperturaDTO2[i].idGrupohorario) {
        cont = cont + 1;
      }
    }

    if (cont > 0) {
      console.log("Solicitud existente");
      this.openDialogEdit("Ya solicitaste este curso");
    } else {
      console.log("Registro con éxito");
      this.openDialogEdit("Solicitud exitosa");
      this.unirseApertura(selectedTypeIdCurso, selectedTypeIdGrupo);
    }
  }

  public validar() {
    let cont: number = 0;
    for (let i in this.aperturaDTO2) {
      if (this.selectedTypeIdCurso == this.aperturaDTO2[i].idCurso && this.selectedTypeIdGrupo == this.aperturaDTO2[i].idGrupohorario) {
        cont = cont + 1;
      }
    }

    if (cont > 0) {
      console.log("Solicitud existente");
      this.openDialogEdit("Ya solicitaste este curso");
    } else {
      console.log("Registro con éxito");
      this.openDialogEdit("Solicitud exitosa");
      this.crearApertura();
    }
  }
}
