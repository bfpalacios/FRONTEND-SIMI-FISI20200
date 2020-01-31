import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../modelos/MainMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //public user: User;
  public success: boolean;
  public items: MenuItem[];
  public authentication: boolean;
  title: string;
  admsis: boolean;
  admus: boolean;
  admme: boolean;
  admcl: boolean;
  admda: boolean;
  admre: boolean;

  public sistema: boolean;
  public usuarios: boolean;
  public mesas: boolean;
  public clientes: boolean;
  public dashboard: boolean;
  public reportes: boolean;

  constructor() {
    this.admsis = false;
    this.admus = false;
    this.admme = false;
    this.admcl = false;
    this.admda = false;
    this.admre = false;
    this.success = true;
    this.initAccesoSistema(false);
  }

  ngOnInit() {
      
  }

  private initAccesoSistema(b: boolean) {
    this.sistema = b;
    this.usuarios = b;
    this.mesas = b;
    this.clientes = b;
    this.dashboard = b;
    this.reportes = b;

    this.admsis = b;
    this.admus = b;
    this.admme = b;
    this.admcl = b;
    this.admda = b;
    this.admre = b;
  }

  getAuth(auth: string) {
    if (auth === 'true') {
      this.success = false;
      this.authentication = true;
    } else {
      this.success = true;
      this.initAccesoSistema(false);
      this.authentication = false;
    }
  }




  show(id: number) {
    switch (id) {
      case 1:
        this.admsis = !this.admsis;
        this.admus = false;
        this.admme = false;
        this.admcl = false;
        this.admda = false;
        this.admre = false;
        break;
      case 2:
        this.admus = !this.admus;
        this.admsis = false;
        this.admme = false;
        this.admcl = false;
        this.admda = false;
        this.admre = false;
        break;
      case 3:
        this.admme = !this.admme;
        this.admsis = false;
        this.admus = false;
        this.admcl = false;
        this.admda = false;
        this.admre = false;
        break;
      case 4:
        this.admcl = !this.admcl;
        this.admsis = false;
        this.admus = false;
        this.admme = false;
        this.admda = false;
        this.admre = false;
        break;
      case 5:
        this.admda = !this.admda;
        this.admsis = false;
        this.admus = false;
        this.admme = false;
        this.admcl = false;
        this.admre = false;
        break;
      case 6:
        this.admre = !this.admre;
        this.admsis = false;
        this.admus = false;
        this.admme = false;
        this.admcl = false;
        this.admda = false;
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
        this.setLocalStorageTitle('Admin. de Usuarios - Tipos de Usuario');
        break;
      case 4:
        this.setLocalStorageTitle('Admin. de Usuarios - Usuarios');
        break;
      case 5:
        this.setLocalStorageTitle('Admin. de Usuarios - Permisos');
        break;
      case 6:
        this.setLocalStorageTitle('Admin. de Mesas - Mesas');
        break;
      case 7:
        this.setLocalStorageTitle('Admin. de Mesas - Perfil de Mesa');
        break;
      case 8:
        this.setLocalStorageTitle('Admin. de Mesas - Programación');
        break;
      case 9:
        this.setLocalStorageTitle('Admin. de Clientes - Clientes');
        break;
      case 10:
        this.setLocalStorageTitle('Admin. de Clientes - Tipo de Cliente');
        break;
      case 11:
        this.setLocalStorageTitle('Admin. de Clientes - Historial');
        break;
      case 12:
        this.setLocalStorageTitle('Dashboard - Reservaciones');
        break;
      case 13:
        this.setLocalStorageTitle('Reportes - Importes/Exportar');
        break;
    }

  }

  setLocalStorageTitle(title: string) {
    this.title = title;
    localStorage.setItem('title', this.title);
  }

}
