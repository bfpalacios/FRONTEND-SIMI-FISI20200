import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sede } from 'src/app/domain/Sede';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Path } from 'src/app/infrastructure/constans/Path';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  estado: boolean;
  prueba : string;
  public id: number;
  sedes : Sede[];
  load: boolean;
  loading: string;
  sede : Sede;

   constructor(private router: Router , private sedeService : SedeService

    ) {
      this.load = true;
    this.loading = Path.loading;
    this.sede = new Sede();
    }


  // constructor() { }

  ngOnInit() {
    //obtener Listado de Alumnos
    // this.router.navigate(['home/feed']).then();
    this.obtenerSedes();
  }
  nuevaSede() {
    
    this.router.navigate(['administracionInstitucional/sedes/crear']).then();
  }

  obtenerSedes() {
    console.log("antes");
    this.sedeService.getSedes().subscribe(data => {
      this.load = false;
      this.sedes = data;

      console.log("sedes", this.sedes);

    }
    )
  }


  // editarAlumno(id: number) 
  editarSede() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/sedes/editar']).then();
  }

  private navigateList() {
    this.router.navigate(['administracionInstitucional/sedes']);
  }

}
