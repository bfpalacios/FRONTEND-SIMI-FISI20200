import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/domain/Idioma';
import { IdiomaService } from 'src/app/services/administracion/idioma/idioma.service';
import { Path } from 'src/app/infrastructure/constans/Path';
@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  estado: boolean;
  prueba : string;
  public id: number;
  idiomas: Idioma[];
  load: boolean;
  loading: string;
   constructor(private router: Router     ,private serviceIdioma: IdiomaService   ) {
    this.load = true;
    this.loading = Path.loading;
    }



  ngOnInit() {
    //obtener Listado de Idiomas
    this.obtenerIdiomas();

  }
  obtenerIdiomas(){
    console.log("antes");
    this.serviceIdioma.getIdiomas().subscribe(data => 
      { 
       this.load=false;
       this.idiomas = data;
       
       console.log("idiomas" ,this.idiomas);

      } 
    )}

  nuevoIdioma() {
    
    this.router.navigate(['administracionInstitucional/idiomas/crear']).then();
  }
  // editarAlumno(id: number) 
  editarIdioma() { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/idiomas/editar']).then();
  }

}

