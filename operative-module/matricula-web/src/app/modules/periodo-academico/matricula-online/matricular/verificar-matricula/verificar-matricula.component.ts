import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ProgramacionCursoService } from 'src/app/services/periodo-academico/programacion-curso.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatriculaVoucherDialogComponent } from 'src/app/dialogs/matricula/matricula-voucher-dialog/matricula-voucher-dialog.component';
import { MatriculaDialogComponent } from 'src/app/dialogs/matricula/matricula-dialog/matricula-dialog.component';
import { Matricula } from 'src/app/domain/Matricula';
@Component({
  selector: 'app-verificar-matricula',
  templateUrl: './verificar-matricula.component.html',
  styleUrls: ['./verificar-matricula.component.css']
})
export class VerificarMatriculaComponent implements OnInit {
  public date: number;
  public load: boolean;
  public cursos: any[];
  public programacionesSeleccionadas: any[];
  public programacionesConVoucher: any[];
  public vouchers: any[];
  public matriculaList: Matricula[];
  constructor(
    private router: Router,
    private serviceProgramacion: ProgramacionCursoService,
    private dataService: DataServiceService,
    private toast: ToastrService,
    private dialog: MatDialog) {
    this.load = true;
    this.programacionesSeleccionadas = [];
    this.matriculaList = [];
    this.date = Date.now();
  }

  ngOnInit() {
    this.getCursosSeleccionados();
    this.getProgramacionbyID();
  }

  atras() {
    this.router.navigate(['/periodo-academico/matriculaOnline/matricular']).then();
  }

  realizarMatricula() {
    let aux = false;
    console.log(this.programacionesSeleccionadas);
    this.programacionesSeleccionadas.forEach(v => {
      if (v.voucher === undefined) {
        aux = true;
      }
    });
    if (aux) {
      this.showDialog(2, 'Debe ingresar un Voucher a cada curso seleccionado.');
    } else {
      this.load = true;
      let mat: Matricula;
      this.programacionesSeleccionadas.forEach(v => {
        mat = new Matricula();
        mat.crearMatricula(v);
        this.matriculaList.push(mat);
      });
      console.log(this.matriculaList);
      this.dataService.matricularOnline(this.matriculaList).subscribe(data => {
        if (data) {
          this.load = false;
          this.router.navigate(['reportes/reporteMatricula']).then();
        }
      }, () => {
        this.toast.error('Sucedió un error en el servidor.');
      });
    }
  }


  getCursosSeleccionados() {
    const cursosSeleccionados = localStorage.getItem('SIMI-MATRICULA-CURSOS-SELECCIONADOS');
    this.cursos = JSON.parse(cursosSeleccionados);
    console.log(this.cursos);
  }

  public getProgramacionbyID() {
    this.getVouchers();
    this.serviceProgramacion.getProgramacionbyID(this.dataService.user.codigo).subscribe(data => {
      data.forEach(v => {
        this.cursos.forEach(c => {
          if (v.idpProgramacionCurso === c.programacionId) {
            this.programacionesSeleccionadas.push(v);
          }
        });
      });
      this.load = false;
    }, error => {
      console.log(error);
    });
  }

  ingresarVoucher(i: number, programacion: any) {
    this.showDialogVoucher(i, programacion, this.vouchers);
  }

  quitarVoucher(i: number, programacion: any) {
    this.vouchers.push(programacion.voucher);
    this.programacionesSeleccionadas[i].voucher = undefined;
  }

  public showDialogVoucher(i: number, programacion: any, vouchers: any) {
    const dialogRef = this.dialog.open(MatriculaVoucherDialogComponent, {
      width: '6 50px',
      data: { programacion, vouchers },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.select) {
        this.programacionesSeleccionadas[i].voucher = result.voucher;
        this.vouchers.splice(result.index, 1);
      }
    });
  }

  private getVouchers() {
    this.dataService.getPagosSinUsar().subscribe(data => {
      this.vouchers = data;
      console.log(this.vouchers);
    },
      () => {
        this.toast.error('Ocurrió un error.');
      });
  }

  public showDialog(motivo: number, mensaje: string) {
    const dialogRef = this.dialog.open(MatriculaDialogComponent, {
      width: '550px',
      data: { motivo, mensaje },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
