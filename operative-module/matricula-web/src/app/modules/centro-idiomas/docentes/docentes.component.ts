import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DocenteService } from 'src/app/services/centro-idiomas/docente.service'
import { DocenteDTO } from 'src/app/domain/DocenteDTO';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  public docente: DocenteDTO[];
  public load: boolean;
  constructor(
    private serviceDocente: DocenteService,
    private router: Router) {
    this.load = true;
  }

  ngOnInit(): void {
    this.getDocentes();
  }

  public getDocentes() {
    this.serviceDocente.getDocentes().subscribe(data => {
      this.docente = data;
      this.load = false;
    }, error => {
      console.log(error);
    });
  }

}
