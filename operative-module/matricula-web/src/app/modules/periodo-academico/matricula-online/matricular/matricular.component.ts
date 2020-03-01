import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProgramacionCursoService } from 'src/app/services/periodo-academico/programacion-curso.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatriculaDialogComponent } from 'src/app/dialogs/matricula/matricula-dialog/matricula-dialog.component';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {
  public date: number;
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
  public seleccionados: any[];
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private serviceProgramacion: ProgramacionCursoService,
    private dataService: DataServiceService,
    private toast: ToastrService,
    private dialog: MatDialog) {
    this.maxCursos = 0;
    this.cursosSeleccionados = 0;
    this.load = true;
    this.seleccionados = [];
    this.cursos = [];
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobile.addListener(this.mobileListener);
    this.date = Date.now();
  }

  ngOnInit() {
    this.getPagosSinUsar();
    this.getProgramacionbyID();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobile.removeListener(this.mobileListener);
  }

  cancelarMatriculaOnline() {
    this.showDialog(1, 'Se cancelará la matrícula, podrá matricularse en otro momento.');
  }

  public siguiente() {
    if (this.cursos.length === 0) {
      this.showDialog(2, 'Seleccione al menos un curso a matricularse.');
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
        this.seleccionados.push({blocked: false, checked: false});
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
    console.log($event);
    if ($event.checked) {
      if (this.maxCursos > 0) {
        this.seleccionados[i].checked = true;
        this.maxCursos = this.maxCursos - 1;
        this.cursosSeleccionados = this.cursosSeleccionados + 1;
        this.cursos.push({programacionId: programacion.idpProgramacionCurso});
        if (this.maxTotal === this.cursosSeleccionados) {
          let c = 0;
          while (c < this.seleccionados.length) {
              if (this.seleccionados[c].checked === false) {
                this.seleccionados[c].blocked = true;
              }
            c++;
          }
        }
      }
    } else {
      if (this.cursosSeleccionados > 0) {
        this.seleccionados[i].checked = false;
        this.maxCursos = this.maxCursos + 1;
        this.cursosSeleccionados = this.cursosSeleccionados - 1;
        this.cursos.splice(i, 1);
        let c = 0;
        while (c < this.seleccionados.length) {
          this.seleccionados[c].blocked = false;
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

  public showDialog(motivo: number, mensaje: string) {
    const dialogRef = this.dialog.open(MatriculaDialogComponent, {
      width: '550px',
      data: {motivo, mensaje},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
