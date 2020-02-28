import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-pagos-realizados',
  templateUrl: './ver-pagos-realizados.component.html',
  styleUrls: ['./ver-pagos-realizados.component.css']
})
export class VerPagosRealizadosComponent implements OnInit {

  public pagosRealizados: any[];
  constructor(
    public dialogRef: MatDialogRef<VerPagosRealizadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.pagosRealizados = data;
   }

  ngOnInit(): void {

  }

}
