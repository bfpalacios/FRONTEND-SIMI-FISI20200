import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/services/centro-idiomas/plan-estudio.service';
import { IdiomaDTO } from 'src/app/domain/IdiomaDTO';
import { Plan } from 'src/app/domain/Plan';
import { IdiomaService } from 'src/app/services/periodo-academico/idioma.service';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})
export class PlanEstudioComponent implements OnInit {
  public planes : Plan[];
  public idiomaDTO: IdiomaDTO[];
  public cantidad: any[];
  constructor(private servicePlan: PlanEstudioService, private serviceIdioma: IdiomaService) { }
  ngOnInit() {
    this.getPlanEstudio();
    this.getIdioma();
  }

  public  getPlanEstudio() {
   this.servicePlan.getPlanDeEstudios().subscribe(data => {
      this.planes = data;
     console.log(this.planes);
    }, error => {
      console.log(error);
    });
  
  }

  public getIdioma() {
    this.serviceIdioma.getIdioma().subscribe(data => {
      this.idiomaDTO = data;
      console.log(this.idiomaDTO);
      }, error => {
      console.log(error);
    });
  }
}
