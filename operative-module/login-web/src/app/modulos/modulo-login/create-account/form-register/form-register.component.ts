import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';
import { EmiiterBuilder } from 'src/app/models/EmiiterBuilder';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/UserDTO';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html'
})
export class FormRegisterComponent implements OnInit {
  public showDatosPersonales: boolean;
  public loading: string;
  public load: boolean;
  public user: User;
  public newUser: UserDTO;
  public msg: string;
  @Output() public emitter;
  constructor(private router: Router) {
    this.loading = 'assets/loading/loading.svg';
    this.load = false;
    this.user = new User();
    this.showDatosPersonales = false;
    this.emitter = new EventEmitter();
    this.newUser = new UserDTO();
   }

  ngOnInit(): void {
  }

  public validarUsuario(): void {
    if(!this.isEmpty()) {
      console.log('nuevo usuario ->', this.newUser);
      this.msg = 'Verificando usuario...';
      EmiiterBuilder.emitterUpdate(this.emitter, this.showDatosPersonales);
    }
  }

  public back(): void {
    this.router.navigate(['/']);
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
