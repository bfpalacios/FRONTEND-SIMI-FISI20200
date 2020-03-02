import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/UserDTO';
import { RegisterService } from 'src/app/services/authentication/regiter.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-form-datos-personales',
  templateUrl: './form-datos-personales.component.html'
})
export class FormDatosPersonalesComponent implements OnInit {
  public newUser: UserDTO;
  public selectedGenero: string;
  public msg: string;
  constructor(
    private router: Router,
    private service: RegisterService,
    private location: Location
  ) {
    this.newUser = new UserDTO();
  }

  ngOnInit(): void {
    this.loadLocalStorage();
  }

  public loadLocalStorage() {
    const newUser = JSON.parse(localStorage.getItem('SIMI-NEW-USER'));
    if (newUser != null) {
       this.newUser = newUser;
    }
  }

  public crearCuentaAlumno() {
    this.newUser.genero = this.selectedGenero;
    if (!this.isEmpty()) {
      this.service.signUpWithEmailAndPassword(this.newUser).subscribe(data => {
        if (data) {
          this.router.navigate(['login']);
        }
      }, () => {
        console.log('Error al ingresar alumno');
      });
    }
  }
  public back() {
    this.location.back();
  }

  private isEmpty() {
    if (this.newUser.docNumber === undefined || this.newUser.docNumber.trim().length === 0) {
      this.msg = 'Ingrese su documento de identidad';
      return true;
    }
    if (this.newUser.names === undefined || this.newUser.names.trim().length === 0) {
      this.msg = 'Ingrese su nombre.';
      return true;
    }
    if (this.newUser.lastNameP === undefined || this.newUser.lastNameP.trim().length === 0) {
      this.msg = 'Ingrese sus apellidos.';
      return true;
    }
    if (this.newUser.lastNameM === undefined || this.newUser.lastNameM.trim().length === 0) {
      this.msg = 'Ingrese sus apellidos.';
      return true;
    }
    if (this.newUser.university === undefined || this.newUser.university.trim().length === 0) {
      this.msg = 'Ingrese su universidad o institución donde estudia.';
      return true;
    }
    if (this.newUser.birthday === undefined || this.newUser.birthday.trim().length === 0) {
      this.msg = 'Ingrese su fecha de nacimiento.';
      return true;
    }
    if (this.newUser.address === undefined || this.newUser.address.trim().length === 0) {
      this.msg = 'Ingrese su dirección.';
      return true;
    }
    if (this.newUser.phone === undefined || this.newUser.phone.trim().length === 0) {
      this.msg = 'Ingrese su número de celular.';
      return true;
    }
    if (this.newUser.genero === undefined || this.newUser.genero === '0') {
      this.msg = 'Ingrese su genero.';
      return true;
    }
  }
}
