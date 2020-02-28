import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProgramacionCursoService } from 'src/app/services/periodo-academico/programacion-curso.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  public programaciones: any[];
  public pagosRealizados: any[];
  showFiller = true;
  mobileQuery: MediaQueryList;
  public maxCursos: number;
  public maxTotal: number;
  public cursosSeleccionados: number;
  mobile: MediaQueryList;
  public id: number;
  public load: boolean;
  public cursos: any[];
  mobileListener: () => void;
  public seleccionado: boolean[];
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private serviceProgramacion: ProgramacionCursoService,
    private dataService: DataServiceService,
    private toast: ToastrService) {
    this.maxCursos = 0;
    this.cursosSeleccionados = 0;
    this.load = true;
    this.seleccionado = [];
    this.cursos = [];
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
  }

  ngOnInit() {
    this.getPagosSinUsar();
    this.getProgramacionbyID();
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  cancelarMatriculaOnline() {
    this.router.navigate(['periodo-academico/matriculaOnline']).then();
  }

  public siguiente() {
    if (this.cursos.length === 0) {
      this.toast.error('Seleccione un curso a matricularse.');
    } else {
      localStorage.setItem('SIMI-MATRICULA-CURSOS-SELECCIONADOS',
      JSON.stringify(this.cursos));
      this.router.navigate(['/periodo-academico/matriculaOnline/verificarMatricula']).then();
    }
    
  }

  public aplicar() {

  }

  public getProgramacionbyID() {
    this.serviceProgramacion.getProgramacionbyID(this.dataService.user.codigo).subscribe(data => {
      this.programaciones = data;
      this.programaciones.forEach(v => {
        this.seleccionado.push(false);
      });
      console.log(this.programaciones);
      this.load = false;
    }, error => {
      console.log(error);
    });
  }

  private getPagosSinUsar() {
    this.dataService.getPagosSinUsar().subscribe(data => {
      this.maxCursos = data.length;
      this.maxTotal = this.maxCursos;
    },
      () => {
        this.toast.error('Ocurrió un error.');
      });
  }


  seleccionarCurso($event, i: number, programacion: any) {
    if ($event.checked) {
      if (this.maxCursos > 0) {
        this.maxCursos = this.maxCursos - 1;
        this.cursosSeleccionados = this.cursosSeleccionados + 1;
        this.cursos.push({programacionId: programacion.idpProgramacionCurso});
        console.log(this.cursos);
        if (this.maxTotal === this.cursosSeleccionados) {
          let c = 0;
          while (c < this.seleccionado.length) {
            if (c !== i) {
              this.seleccionado[c] = true;
            }
            c++;
          }
        }
      }
    } else {
      if (this.cursosSeleccionados > 0) {
        this.maxCursos = this.maxCursos + 1;
        this.cursosSeleccionados = this.cursosSeleccionados - 1;
        this.cursos.splice(i, 1);
        let c = 0;
        while (c < this.seleccionado.length) {
          this.seleccionado[c] = false;
          c++;
        }
      }
    }
  }

  verificarMaxCursosSeleccionados() {
    if (this.cursosSeleccionados === this.maxTotal) {
      this.toast.info('Máximo de cursos seleccionados.');
    }
  }

}
