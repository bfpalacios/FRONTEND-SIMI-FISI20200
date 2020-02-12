import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorSistemaComponent } from './error-sistema/error-sistema.component';
import { SistemaMatriculaService } from 'src/app/services/sistema/sistema-matricula.service';
import {ToastrService} from 'ngx-toastr';
import { Path } from 'src/app/constants/Path';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public available: boolean;
  public loading: boolean;
  public loadingGif: string;

  constructor(
    private router: Router,
    private service: SistemaMatriculaService,
    private toastService: ToastrService) {
      this.loadingGif = Path.loadingGif;
      this.available = true;
      this.loading = true;
  }

  ngOnInit() {
    this.verificarSistema();
  }

  onIngresar(){
    this.router.navigate(['/createAccount']);
  }

  private verificarSistema() {
    this.service.verificarSistemaMatricula().subscribe(data => {
      // Success
    }, () => { // Error
      this.errorSistema();
    });
  }

  public ingresarSistema() {
    if (!this.available) {
      this.verificarSistema();
    }
  }

  public registrarme() {
    if (!this.available) {
      this.verificarSistema();
    }
  }

  private errorSistema() {
    this.available = false;
    this.loading = false;
    this.toastService.error('Sistema no disponible');
  }

}
