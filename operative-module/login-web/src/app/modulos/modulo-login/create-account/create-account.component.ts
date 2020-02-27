import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserDTO } from 'src/app/models/UserDTO';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormDatosPesonalesComponent } from './form-datos-pesonales/form-datos-pesonales.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {
  public showDatosPersonales: boolean;
  public loading: string;
  public load: boolean;
  public newUser: UserDTO;
  @ViewChild(FormRegisterComponent) formRegisterUser;
  @ViewChild(FormDatosPesonalesComponent) formRegisterDatos;

  constructor() {
    this.loading = 'assets/loading/loading.svg';
    this.load = false;
    this.newUser = new UserDTO();

    this.showDatosPersonales = false;
   }

  ngOnInit() {
  }

  ngAfterContentInit($event) {
    console.log($event);
    this.showDatosPersonales = $event === 'true' ? true : false;
  }

  ngAfterViewInit() {
    this.newUser = this.formRegisterUser.newUser;
    console.log('Obteniendo usuario ->', this.newUser);
    if (this.formRegisterDatos !== undefined) {
      this.newUser = this.formRegisterDatos.newUser;
      console.log('Obteniendo usuario ->', this.newUser);
    }
  }
}
