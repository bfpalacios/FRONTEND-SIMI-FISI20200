import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula-dialog',
  templateUrl: './matricula-dialog.component.html',
  styleUrls: ['./matricula-dialog.component.css']
})
export class MatriculaDialogComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<MatriculaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }


  public aceptar() {
    this.router.navigate(['periodo-academico/matriculaOnline']).then();
  }
}
