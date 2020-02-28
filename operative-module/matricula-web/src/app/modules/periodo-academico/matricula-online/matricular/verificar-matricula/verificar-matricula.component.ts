import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ProgramacionCursoService } from 'src/app/services/periodo-academico/programacion-curso.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-verificar-matricula',
  templateUrl: './verificar-matricula.component.html',
  styleUrls: ['./verificar-matricula.component.css']
})
export class VerificarMatriculaComponent implements OnInit {

  public load: boolean;
  public cursos: any[];
  public programacionesSeleccionadas: any[];
  constructor(
    private router: Router,
    private serviceProgramacion: ProgramacionCursoService,
    private dataService: DataServiceService,
    private toast: ToastrService) {
    this.load = true;
    this.programacionesSeleccionadas = [];
   }

  ngOnInit() {
    this.getCursosSeleccionados();
    this.getProgramacionbyID();
  }

  atras() {
    this.router.navigate(['/periodo-academico/matriculaOnline/matricular']).then();
  }

  realizarMatricula() {
    this.dataService.matricularOnline(this.programacionesSeleccionadas).subscribe(data => {
      if (data) {
       // this.router.navigate(['reportes/reporteMatricula']).then();
      }
    }, () => {
      this.toast.error('Sucedió un error en el servidor.');
    });
  }


  getCursosSeleccionados() {
    const cursosSeleccionados = localStorage.getItem('SIMI-MATRICULA-CURSOS-SELECCIONADOS');
    this.cursos = JSON.parse(cursosSeleccionados);
    console.log(this.cursos);
  }

  public getProgramacionbyID() {
    this.serviceProgramacion.getProgramacionbyID(this.dataService.user.codigo).subscribe(data => {
      console.log(data);
      data.forEach(v => {
        this.cursos.forEach(c => {
          if (v.idpProgramacionCurso === c.programacionId) {
            this.programacionesSeleccionadas.push(v);
          }
        });
      });
      console.log(this.programacionesSeleccionadas);
      this.load = false;
    }, error => {
      console.log(error);
    });
  }
}
