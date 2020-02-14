import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/services/centro-idiomas/plan-estudio.service';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})
export class PlanEstudioComponent implements OnInit {
  
  public planes : any[];
  constructor(private servicePlan: PlanEstudioService) { }
  ngOnInit() {
    this.getPlanEstudio();  
  }

  public getPlanEstudio() {
    this.servicePlan.getPlanDeEstudios().subscribe(data => {
      this.planes = data;
      console.log(this.planes);
    }, error => {
      console.log(error);
    });
  }
  idioma = ['Inglés', 'Portugués', 'Francés', 'Italiano', 'Quechua', 'Alemán', 'Coreano', 'Japonés']
  nivel = ['Básico', 'Intermedio', 'Avanzado', 'Posgrado']
  ciclo = [[12, 10, 8, 8], [5, 4, 3, 6], [4, 8, 4], [6, 3, 3], [6, 6, 4], [10, 6, 8], [3, 5, 4], [13, 9, '---']]
  libro = [['English File: Elementary 3rd Edition (6), English File: Pre intermediate (6)', 'English File: Intermediate (5), English File: Upper-intermediate (5)', 'English File: Advanced', 'Smart Choice 1 y 2'], ['Ben vindo! (Libro + cuaderno de ejercicios)', 'Fale Português 1 y 2'], ['Alter Ego Plus 1', 'Alter Ego Plus 2 , Alter Ego Plus 3', 'Alter Ego Plus 4'], ['Nuovo Progetto Italiano'], ['Texto único: Manual de enseñanza "Clodoaldo Soto Ruiz"'], ['Tangram A1', 'Tangram B1', 'Tangram B2'], ['Easy Korean'], ['Material de uso interno']]
}
