import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { PersonaUsuario } from 'src/app/models/PersonaUsuario';
import { AperturaDialogComponent } from 'src/app/dialogs/matricula/apertura-dialog/apertura-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-datos-usuario-feed',
  templateUrl: './datos-usuario-feed.component.html',
  styleUrls: ['./datos-usuario-feed.component.css']
})
export class DatosUsuarioFeedComponent implements OnInit {

  
  public userDates: PersonaUsuario;
  constructor(
    private router: Router,
    private dataService: DataServiceService,
    private toastService: ToastrService) {
    this.userDates = new PersonaUsuario();
  }

  ngOnInit() {
    this.obtenerDatosUsuario();
  }

  public obtenerDatosUsuario() {
    this.dataService.obtenerDatosUsuario().subscribe(data => {
      console.log(data);
      if (data != null) {
        this.userDates = data;
      } else {
        this.toastService.error('Error con el servidor de la Base de Datos.');
      }
    }, () => {
      this.toastService.error('Error en el servidor y/o Base de datos.');
    });
  }

  public informacionAcademica() {
    this.router.navigate(['profile/informacionAcademica']).then();
  }

  public historialAcademico() {
    this.router.navigate(['profile/historialAcademico']).then();
  }

  public cuentaUsuario() {
    this.router.navigate(['profile/cuentaUsuario']).then();
  }
}
