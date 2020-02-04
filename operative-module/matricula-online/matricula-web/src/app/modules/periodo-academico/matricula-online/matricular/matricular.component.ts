import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelarMatriculaOnline() {
    this.router.navigate(['periodo-academico/matriculaOnline']).then();
  }

}
