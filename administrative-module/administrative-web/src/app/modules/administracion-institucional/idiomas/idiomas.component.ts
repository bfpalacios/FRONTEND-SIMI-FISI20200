import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/domain/Idioma';
import { Path } from 'src/app/infrastructure/constans/Path';
import Swal from 'sweetalert2';
import { IdiomaService } from 'src/app/services/administracion/AdmInstitucional/idioma.service';
@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  public  pageActual : number ;
  estado: boolean;
  prueba: string;
  public id: number;
  idiomas: Idioma[];
  idioma : Idioma;
  load: boolean;
  loading: string;
  constructor(
    private router: Router,
    private serviceIdioma: IdiomaService) {
    this.load = true;
    this.loading = Path.loading;
    this.idioma = new Idioma();
    this.pageActual = 1;

  }



  ngOnInit() {
    //obtener Listado de Idiomas
    this.obtenerIdiomas();

  }
  obtenerIdiomas() {
    console.log("antes");
    this.serviceIdioma.getIdiomas().subscribe(data => {
      this.load = false;
      this.idiomas = data;
      console.log("idiomas", data);

      console.log("idiomas", this.idiomas);

    }
    )
  }

  nuevoIdioma() {

    this.router.navigate(['administracionInstitucional/idiomas/crear']).then();
  }
  // editarAlumno(id: number) 
  editarIdioma(id:number) {
    console.log("editaridioma");
    console.log(id);
    this.router.navigate(['administracionInstitucional/idiomas/editar/'+id]).then();
    // this.router.navigate(['administracionInstitucional/idiomas/editar']).then();

  }

  private navigateList() {
    this.router.navigate(['administracionInstitucional/idiomas']);
  }

  public eliminarIdioma(id: number) {
    console.log(id);
    
    this.serviceIdioma.getIdiomaById(id).subscribe(o => {
      if (o !== null) {
        this.idioma = o;console.log(this.idioma);
        Swal.fire({
          title: 'Estas seguro que desea eliminar el idioma '+ this.idioma.nomIdioma+' ?',
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
            this.serviceIdioma.deleteIdiomaById(id).subscribe(data => {
              
              if (data) {
                this.load = false;
                Swal.fire(
                  'Idioma Eliminado!',
                  'El idioma '+ this.idioma.nomIdioma+' se elimino correctamente.',
                  'success'
                );
                this.obtenerIdiomas();
        
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

