import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-apertura-dialog',
  templateUrl: './apertura-dialog.component.html',
  styleUrls: ['./apertura-dialog.component.css']
})
export class AperturaDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<AperturaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log('Data recibida ->', this.data);
  }

}
