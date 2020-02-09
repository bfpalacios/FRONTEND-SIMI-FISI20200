import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  
  constructor(private router: Router) {
   
   }

  ngOnInit() {
  }

  public informacionAcademica() {
    this.router.navigate(['profile/informacionAcademica']).then();
  }

  public programacionCursos() {
    this.router.navigate(['periodo-academico/programacionCurso']).then();
  }

  public planEstudios() {
    this.router.navigate(['centro-idiomas/planEstudio']).then();
  }
}
