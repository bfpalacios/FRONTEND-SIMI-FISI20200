import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/MainMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public success: boolean;
  public items: MenuItem[];
  public authentication: boolean;
  public modules: any[];
  public title: string;

  constructor(private router: Router) {
    this.success = true;
    this.initAccesoSistema(false);
  }

  ngOnInit() {
  }

  private initAccesoSistema(b: boolean) {
    this.modules = [
      {module: 1, state: false},
      {module: 2, state: false},
      {module: 3, state: false},
      {module: 4, state: false},
      {module: 5, state: false},
      {module: 6, state: false}];
    this.modules.forEach(value => {
      value.state = b;
    });
  }

  show(id: number) {
    this.modules.forEach(value => {
      if (value.module === id) {
        value.state = !value.state;
      } else {
        value.state = false;
      }
    });
  }

  public home() {
    this.router.navigate(['home']).then();
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
