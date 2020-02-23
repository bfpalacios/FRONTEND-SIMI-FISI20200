import { Component, OnInit } from '@angular/core';
import { SistemaMatriculaService } from './services/sistema/sistema-matricula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-web';

  constructor() {

  }

  ngOnInit() {
  }
}
