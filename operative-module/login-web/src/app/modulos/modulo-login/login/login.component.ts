import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorSistemaComponent } from './error-sistema/error-sistema.component';
import { SistemaMatriculaService } from 'src/app/services/sistema/sistema-matricula.service';
import { ToastrService } from 'ngx-toastr';
import { Path } from 'src/app/constants/Path';
import { Authentication } from 'src/app/domain/Authentication';
import { LoginService } from 'src/app/services/autenticacion/login.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public available: boolean;
  public loading: boolean;
  public loadingGif: string;

  public auth: Authentication;

  constructor(
    private router: Router,
    private service: SistemaMatriculaService,
    private signIn: LoginService,
    private toastService: ToastrService) {
    this.loadingGif = Path.loadingGif;
    this.available = true;
    this.loading = true;
    this.auth = new Authentication();
  }

  ngOnInit() {
    this.verificarSistema();
  }

  onIngresar() {
    this.router.navigate(['/createAccount']);
  }

  private verificarSistema() {
    this.loading = true;
    this.service.verificarSistemaMatricula().subscribe(data => {
      this.loading = false;
    }, () => { // Error
      this.available = false;
      this.errorSistema();
    });
  }

  public ingresarSistema() {
    if (!this.available) {
      this.verificarSistema();
    } else {
      if (!this.isEmpty()) {
        this.verificarUsuario();
      } else {
        console.log('Vacios');
      }
    }
  }

  private verificarUsuario() {
    this.loading = true;
    this.signIn.verificarSiExisteUsuario(this.auth.email).subscribe(data => {
      if (data) {
        console.log('Usuario existe');
        this.login();
      } else {
        this.loading = false;
        this.toastService.error('Email no existe.');
      }
    }, () => {
      this.loading = false;
      this.errorSistema();
    });
  }
  private login() {

    this.signIn.ingresarConEmailYContraseña(this.auth)
      .subscribe(data => {
        this.loading = false;
        if (data) {
          this.toastService.info('Email existe, logueado');
          console.log('loagueado', data);
        } else {
          this.toastService.info('Email existe, contraseña incorrecta');
          console.log('No logueado');
        }
      },
        () => {
          this.errorSistema();
        });

  }

  public registrarme() {
    if (!this.available) {
      this.verificarSistema();
    }
  }

  private errorSistema() {
    this.loading = false;
    this.toastService.error('Sistema no disponible');
  }

  private isEmpty() {
    if (this.auth.email === undefined || this.auth.email.trim().length === 0) {
      return true;
    }
    if (this.auth.password === undefined || this.auth.password.trim().length === 0) {
      return true;
    }
  }

}
