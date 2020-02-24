import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public user: User;
  constructor(
    private router: Router,
    private signIn: LoginService,
    private toast: ToastrService
  ) {
    this.user = new User();
   }

  ngOnInit() {
  }

  public login() {
    if (!this.isEmpty()) {
      console.log(this.user);
      this.signIn.signInWithEmailAndPassword(this.user).subscribe(data => {
        if (data != null) {
          console.log('Funciona!!!!! ->', data);
        } else {
          console.log('Email y/o contraseña incorrectos');
        }
        
      }, () => {
        this.toast.error('Ha ocurrido un error en el servidor.');
      });
    }
  }

  private isEmpty() {
    if (this.user.email === undefined || this.user.email.trim().length === 0) {
      return true;
    }
    if (this.user.password === undefined || this.user.password.trim().length === 0) {
      return true;
    }
  }
}
