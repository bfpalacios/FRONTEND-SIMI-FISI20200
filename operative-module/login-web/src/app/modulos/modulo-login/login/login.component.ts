import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ErrorSistemaComponent } from './error-sistema/error-sistema.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  durationInSeconds: number = 5;


  constructor(private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { 
    this.durationInSeconds = this.durationInSeconds * 1000;
  }

  ngOnInit() {
  }

  prueba() {
    this.router.navigate(['prueba'], {relativeTo: this.route}).then();
  }

  onIngresar(){
    this.router.navigate(['/createAccount']);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ErrorSistemaComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
