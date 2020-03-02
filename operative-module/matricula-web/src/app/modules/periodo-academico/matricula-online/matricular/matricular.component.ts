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

  public programacion : any[];
  public pagosRealizados: any[];
  showFiller = true;
  mobileQuery: MediaQueryList;
  public maxCursos: number;
  public cursosSeleccionados: number;
  mobile: MediaQueryList;
  mobileListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private serviceProgramacion: ProgramacionCursoService,
    private dataService: DataServiceService,
    private toast: ToastrService) {
      this.maxCursos = 0;
      this.cursosSeleccionados = 0;
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
  }

  ngOnInit() {
    this.getPagosSinUsar();
    this.getProgramacion();
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  cancelarMatriculaOnline() {
    this.router.navigate(['periodo-academico/matriculaOnline']).then();
  }

  public siguiente() {
    this.router.navigate(['/periodo-academico/matriculaOnline/verificarMatricula']).then();
  }

  public aplicar() {
 
  }

  public getProgramacion() {
    this.serviceProgramacion.getProgramacion().subscribe(data => {
      this.programacion = data;
      console.log(this.programacion);
    }, error => {
      console.log(error);
    });
  }

  private getPagosSinUsar() {
    this.dataService.getPagosSinUsar().subscribe(data => {
      this.maxCursos = data.length;
    },
    () => {
      this.toast.error('Ocurrió un error.');
    });
  }


  seleccionarCurso() {
    if(this.maxCursos > 0) {
      this.maxCursos = this.maxCursos - 1;
    }
  }

}
