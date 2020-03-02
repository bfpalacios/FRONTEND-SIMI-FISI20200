import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { EmiiterBuilder } from 'src/app/models/EmiiterBuilder';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/UserDTO';
import { RegisterService } from 'src/app/services/authentication/regiter.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html'
})
export class FormRegisterComponent implements OnInit {
  public loading: string;
  public load: boolean;
  public user: User;
  public newUser: UserDTO;
  public msg: string;
  constructor(
    private router: Router,
    private service: RegisterService,
    private location: Location) {
    this.loading = 'assets/loading/loading.svg';
    this.load = false;
    this.user = new User();
    this.newUser = new UserDTO();
   }

  ngOnInit(): void {
    this.loadLocalStorage();
  }

  public validarUsuario(): void {
    if (!this.isEmpty()) {
      this.msg = 'Verificando usuario...';
      this.service.validadUsuario(this.newUser).subscribe(data => {
        if (!data) {
          this.msg = 'Ya existe un usuario registrado con este email.';
        } else {
          this.saveLocalStorage();
          this.irRegistrarDatosPersonales(); 
        }
      });
    }
  }

  public loadLocalStorage() {
    const newUser = JSON.parse(localStorage.getItem('SIMI-NEW-USER'));
    if (newUser != null) {
       this.newUser = newUser;
    }
  }

  public saveLocalStorage() {
    localStorage.setItem('SIMI-NEW-USER', JSON.stringify(this.newUser));
  }
  public irRegistrarDatosPersonales() {
    this.router.navigate(['login/createAccount/datosPersonales']);
  }
  public back(): void {
    localStorage.clear();
    this.location.back();
  }


  private isEmpty() {
    if (this.newUser.email === undefined || this.newUser.email.trim().length === 0) {
      this.msg = 'Ingrese email de usuario';
      return true;
    }
    if (this.newUser.password === undefined || this.newUser.password.trim().length === 0) {
      this.msg = 'Ingrese contraseña de usuario';
      return true;
    }
    if (this.newUser.passwordConfirm === undefined || this.newUser.passwordConfirm.trim().length === 0) {
      this.msg = 'Confirme contraseña de usuario';
      return true;
    }
    if (this.newUser.password !== this.newUser.passwordConfirm) {
      this.msg = 'Contraseñas no coinciden';
      return true;
    }
  }
}
