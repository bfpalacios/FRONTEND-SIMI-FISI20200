import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-sistema',
  templateUrl: './error-sistema.component.html',
  styleUrls: ['./error-sistema.component.css']
})
export class ErrorSistemaComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<ErrorSistemaComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any){
  }

  ngOnInit() {
  }

}
