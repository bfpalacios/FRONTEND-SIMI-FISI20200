import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AulaDTO } from 'src/app/domain/AulaDTO';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { AulaService } from 'src/app/services/administracion/AdmInstitucional/aula.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {
  public  pageActual : number ;
  estado: boolean;
  prueba : string;
  public id: number;
   aulasdto: AulaDTO[];
   auladto : AulaDTO;
  load: boolean;
  loading: string;
   constructor(private router: Router 
    ,private serviceAula: AulaService  
    ) {
      this.load = true;
      this.loading = Path.loading;
     this.estado = false;
     this.auladto = new AulaDTO();
     this.pageActual = 1;

    }


  ngOnInit() {
    this.obtenerAulas();


  }
  obtenerAulas() {
    console.log("antes");
    this.serviceAula.getAulas().subscribe(data => {
      this.load = false;
      this.aulasdto = data;
    }
    )
  }

  nuevaAula() {
    
    this.router.navigate(['administracionInstitucional/aulas/crear']).then();
  }
  // editarAlumno(id: number) 
  editarAula(id:number) { 
    // this.router.navigate(['administracionInstitucional/alumnos/nuevo/editar/' + id]);
    this.router.navigate(['administracionInstitucional/aulas/editar/'+id]).then();
  }

  private navigateList() {
    this.router.navigate(['administracionInstitucional/aulas']);
  }

  public eliminarAula(id: number) {
    console.log(id);
    
    this.serviceAula.getAulaById(id).subscribe(o => {
      if (o !== null) {
        this.auladto = o;console.log(this.auladto);
        Swal.fire({
          title: 'Estas seguro que desea eliminar el aula '+ this.auladto.nomAula+' ?',
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
            this.serviceAula.deleteAulaById(id).subscribe(data => {
              
              if (data) {
                this.load = false;
                Swal.fire(
                  'Idioma Eliminado!',
                  'El aula '+ this.auladto.nomAula+' se elimino correctamente.',
                  'success'
                );
                this.obtenerAulas();
        
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
