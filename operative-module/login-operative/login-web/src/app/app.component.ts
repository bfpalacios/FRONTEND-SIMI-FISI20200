import { Component, OnInit } from '@angular/core';
import { SistemaMatriculaService } from './services/sistema/sistema-matricula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-web';

  constructor(private service: SistemaMatriculaService) {

  }

  ngOnInit() {
    this.verificarSistema();
  }

  public verificarSistema() {
    this.service.verificarSistemaMatricula(data => {
      if (data) {
        console.log(data);
      }
    }, error => {
      console.log(error);
    });
  }
}
