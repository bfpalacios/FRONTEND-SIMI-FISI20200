import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matricula-online',
  templateUrl: './matricula-online.component.html',
  styleUrls: ['./matricula-online.component.css']
})
export class MatriculaOnlineComponent implements OnInit {

  public pagosRealizados: any[];
  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    //this.pagosRealizados = [];
    this.pagosRealizados = ["1", "2", "3", "4", "5", "6"];
  }
}
