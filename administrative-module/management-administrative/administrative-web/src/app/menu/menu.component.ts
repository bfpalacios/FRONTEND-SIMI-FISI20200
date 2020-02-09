import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/MainMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public success: boolean;
  public items: MenuItem[];
  public authentication: boolean;
  title: string;
  admsis: boolean;
  admus: boolean;
  adminst: boolean;
  perac: boolean;
  admmat: boolean;
  rep: boolean;


  public sistema: boolean;
  public usuarios: boolean;
  public institucional: boolean;
  public periodo: boolean;
  public matricula: boolean;
  public reportes: boolean;

  constructor() {
    this.admsis = false;
    this.admus = false;
    this.adminst = false;
    this.perac = false;
    this.admmat = false;
    this.rep = false;
    this.success = true;
    this.initAccesoSistema(false);
  }

  ngOnInit() {
      
  }

  private setItems() {
    this.items.push();
  }
  private initAccesoSistema(b: boolean) {
    this.sistema = b;
    this.usuarios = b;
    this.institucional = b;
    this.periodo = b;
    this.matricula = b;
    this.reportes = b;

    this.admsis = b;
    this.admus = b;
    this.adminst = b;
    this.perac = b;
    this.admmat = b;
    this.rep = b;
  }

  show(id: number) {
    switch (id) {
      case 1:
        this.admsis = !this.admsis;
        this.admus = false;
        this.adminst = false;
        this.perac = false;
        this.admmat = false;
        this.rep = false;
        break;
      case 2:
        this.admus = !this.admus;
        this.admsis = false;
        this.adminst = false;
        this.perac = false;
        this.admmat = false;
        this.rep = false;
        break;
      case 3:
        this.adminst = !this.adminst;
        this.admsis = false;
        this.admus = false;
        this.perac = false;
        this.admmat = false;
        this.rep = false;
        break;
      case 4:
        this.perac = !this.perac;
        this.admsis = false;
        this.admus = false;
        this.adminst = false;
        this.admmat = false;
        this.rep = false;
        break;
      case 5:
        this.admmat = !this.admmat;
        this.admsis = false;
        this.admus = false;
        this.adminst = false;
        this.perac = false;
        this.rep = false;
        break;
      case 6:
        this.rep = !this.rep;
        this.admsis = false;
        this.admus = false;
        this.adminst = false;
        this.perac = false;
        this.admmat = false;
        break;
    }
  }

  setTitle(id: number) {
    switch (id) {
      case 1:
        this.setLocalStorageTitle('Admin. del Sistema - Sistema General');
        break;
      case 2:
        this.setLocalStorageTitle('Admin. del Sistema - Configuración');
        break;
      case 3:
          this.setLocalStorageTitle('Admin. de Usuarios - Permisos');
          break;
      case 4:
          this.setLocalStorageTitle('Admin. de Usuarios - Tipos de Usuarios');
          break;
       case 5:
          this.setLocalStorageTitle('Admin. de Usuarios - Usuarios');
      case 6:
        this.setLocalStorageTitle('Admin. Institucional - Idiomas');
        break;
      case 7:
        this.setLocalStorageTitle('Admin. Institucional - Horarios');
        break;
      case 8:
        this.setLocalStorageTitle('Admin. Institucional - Cursos');
        break;
      case 9:
        this.setLocalStorageTitle('Admin. Institucional - Docentes');
        break;
      case 10:
        this.setLocalStorageTitle('Admin. Institucional - Alumnos');
        break;
      case 11:
        this.setLocalStorageTitle('Admin. Institucional - Sedes');
        break;
      case 12:
        this.setLocalStorageTitle('Admin. Institucional - Aulas');
        break;
      case 13:
        this.setLocalStorageTitle('Periódo Académico - Ciclo Académico');
        break;
      case 14:
        this.setLocalStorageTitle('Periódo Académico - Matriculados');
        break;
      case 15:
        this.setLocalStorageTitle('Periódo Académico - Programación de Cursos');
        break;
      case 16:
        this.setLocalStorageTitle('Admin. de Matrícula - Matricula Online');
        break;
      case 17:
        this.setLocalStorageTitle('Admin. de Matrícula - Monitoreo de Matrícula');
        break;
      case 18:
        this.setLocalStorageTitle('Reportes - Reportes Institucionales');
        break;
      case 19:
        this.setLocalStorageTitle('Reportes - Reportes de Pagos');
        break;
    }

  }

  setLocalStorageTitle(title: string) {
    this.title = title;
    localStorage.setItem('title', this.title);
  }

}
