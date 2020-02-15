import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/domain/Configuracion';
import { Path } from 'src/app/infrastructure/constans/Path';
import { SistemaGeneralService } from 'src/app/services/administracion/sistema/sistema-general.service';
 import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  load: boolean;
  edit: boolean;
  saving: boolean;
  loading: string;
  btn: string;
  empty: boolean;
  emptyText: string;
  success: boolean;
  successText: string;
  existLogo: boolean;

  constructor() {
    this.loading = Path.loading;
    this.edit = true;
    this.load = false;
    this.saving = false;
    this.btn = 'Editar';
    this.empty = false;
    this.success = false;
    this.existLogo = false;
  }

  ngOnInit() {
  }

  editar() {
    this.edit = !this.edit;
    this.btn = 'Guardar';
    this.success = false;
  }

  public cancelar() {
    this.btn = 'Editar';
    this.edit = !this.edit;
    this.empty = false;
  }

}
