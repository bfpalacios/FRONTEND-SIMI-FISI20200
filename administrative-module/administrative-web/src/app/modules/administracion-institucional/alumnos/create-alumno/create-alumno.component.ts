import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.css']
})
export class CreateAlumnoComponent implements OnInit {
 
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public pmcompuesta : boolean;
  public selectedTypeIdPerfil : number;
  public selectedTypeIdEstado : number;

  constructor(private router: Router )  {
    this.selectedTypeIdPerfil = 0;
    this.selectedTypeIdEstado = 0;
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
  }

  

  ngOnInit() {//lenar cmbs
  }

  crearAlumno(){
      this.navigateList();
      this.load = false;
    }

    cancelar(){
      this.navigateList();
      this.load = false;
    }
    
    private navigateList() {
      this.router.navigate(['administracionInstitucional/alumnos']).then();
    }
  }


