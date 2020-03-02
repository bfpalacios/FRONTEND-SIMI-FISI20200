import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router, Data } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login.service';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public load: boolean;
  public msg: string;
  @Output() public emitter: EventEmitter<any>;
  public user: User;
  constructor(
    private router: Router,
    private signIn: LoginService,
    private service: DataServiceService,
    private toast: ToastrService
  ) {
    this.emitter = new EventEmitter();
    this.user = new User();
    this.load = true;
  }

  /* UpdateLoad
   * Actualiza el estado de "Cargando"
   */
  updateLoad() {
    this.load = !this.load;
    this.emitter.emit(this.load.toString());
  }

  ngOnInit() {
    this.updateLoad();
  }

  /* Login
   * Ingresar al sistema mediante Usuario y Contraseña
   * User: {email, password}
  */
   public login() {
    if (!this.isEmpty()) {
      this.updateLoad();
      this.signIn.signInWithEmailAndPassword(this.user).subscribe(data => {
        this.updateLoad();
        this.updateSession(data);
      }, () => {
        this.updateLoad();
        this.toast.error('Ha ocurrido un error en el servidor.');
      });
    }
  }
  private updateSession(data: User) {
    if (data != null) {
      this.user = data;
      this.service.authenticated = true;
      sessionStorage.setItem('SIMI-AUTHENTICATED', 'SIMI-TRUE');
      sessionStorage.setItem('SIMI-EMAIL', this.user.email);
      sessionStorage.setItem('SIMI-ID', this.user.id);
      sessionStorage.setItem('SIMI-TYPE', this.user.rolId);
      this.matriculaOnline();
    } else {
      this.msg = 'Email y/o contraseña incorrectos';
    }
  }

  private matriculaOnline() {
    this.router.navigate(['home']);
  }

  private isEmpty() {
    if (this.user.email === undefined || this.user.email.trim().length === 0) {
      this.msg = 'Ingrese nombre de usuario';
      return true;
    }
    if (this.user.password === undefined || this.user.password.trim().length === 0) {
      this.msg = 'Ingrese contraseña de usuario';
      return true;
    }
  }

  public crearCuenta() {
    this.router.navigate(['createAccount']);
  }
}
