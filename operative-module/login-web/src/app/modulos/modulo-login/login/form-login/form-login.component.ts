import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login.service';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public msg: string;
  public load: boolean;

  @Output() public emitter;
  public user: User;
  constructor(
    private router: Router,
    private signIn: LoginService,
    private toast: ToastrService
  ) {
    this.emitter = new EventEmitter();
    this.user = new User();
    this.load = true;
  }

  updateLoad() {
    this.load = !this.load;
    this.emitter.emit(this.load.toString());
  }

  ngOnInit() {
   this.updateLoad();
  }

  public login() {
     if (!this.isEmpty()) {
      this.updateLoad();
      this.signIn.signInWithEmailAndPassword(this.user).subscribe(data => {
        this.updateLoad();
        if (data != null) {
          this.user = data;
          if (this.user.id === '' && this.user.email === '' && this.user.password === '') {
            this.toast.error('Es posible que la Base de Datos no exista o la Tabla no exista.');
          } else {
            this.msg = 'Ha iniciado sesión. Gracias por probar.';
            console.log(this.msg);
          }
        } else {
          this.msg = 'Email y/o contraseña incorrectos';
        }
      }, () => {
        this.updateLoad();
        this.toast.error('Ha ocurrido un error en el servidor.');
      });
    }
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

  public signUp() {
   this.router.navigate(['createAccount']);
  }
}
