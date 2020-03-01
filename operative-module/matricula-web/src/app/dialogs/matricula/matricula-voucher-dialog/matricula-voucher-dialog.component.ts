import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-matricula-voucher-dialog',
  templateUrl: './matricula-voucher-dialog.component.html'
})
export class MatriculaVoucherDialogComponent implements OnInit {

  public programacion: any;
  public vouchers: any[];
  public selected: boolean;
  constructor(
    public dialogRef: MatDialogRef<MatriculaVoucherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.selected = false;
  }

  ngOnInit(): void {
    this.programacion = this.data.programacion;
    this.vouchers = this.data.vouchers;
  }

  public usarVoucher(i: number, voucher: any) {
    this.selected = true;
    this.dialogRef
      .beforeClose()
      .subscribe(() => this.dialogRef.close({ index: i, voucher, select: this.selected }));
  }
}

