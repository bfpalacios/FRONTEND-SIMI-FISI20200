import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sede } from 'src/app/domain/Sede';
import { SedeService } from 'src/app/services/administracion/AdmInstitucional/sede.service';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {
  public  pageActual : number ;
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
    this.pageActual = 1;

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



  editarSede(id:number) {
    console.log("editaridioma");
    console.log(id);
    this.router.navigate(['administracionInstitucional/sedes/editar/'+id]).then();
    // this.router.navigate(['administracionInstitucional/idiomas/editar']).then();

  }

  private navigateList() {
    this.router.navigate(['administracionInstitucional/sedes']);
  }

  public eliminarSede(id: number) {
    console.log(id);
    
    this.sedeService.getSedeById(id).subscribe(o => {
      if (o !== null) {
        this.sede = o;console.log(this.sede);
        Swal.fire({
          title: 'Estas seguro que desea eliminar la sede '+ this.sede.nomSede+' ?',
          // text: "S",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            this.load = true;
            this.sedeService.deleteSedeById(id).subscribe(data => {
              
              if (data) {
                this.load = false;
                Swal.fire(
                  'Sede Eliminada!',
                  'La sede '+ this.sede.nomSede+' se elimino correctamente.',
                  'success'
                );
                this.obtenerSedes();
        
              } else {
                this.load = false;
                // this.obtenerIdiomas();
              }
            }, error => {
              if (error) {
                this.load = false;
                // this.obtenerIdiomas();
               
              }
            });
           
          }
          })

         } else {  this.navigateList();    }
   
  } ) ;

  }

}
