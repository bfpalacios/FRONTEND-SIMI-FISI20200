import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/services/centro-idiomas/plan-estudio.service';
import { IdiomaDTO } from 'src/app/domain/IdiomaDTO';
import { Plan } from 'src/app/domain/Plan';
import { IdiomaService } from 'src/app/services/periodo-academico/idioma.service';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html'
})
export class PlanEstudioComponent implements OnInit {
  public planes: Plan[];
  public idiomaDTO: IdiomaDTO[];
  public planEstudios: any[];
  public cantidad: any[];
  public load: boolean;
  public planSelected: any;
  public selected: boolean[];
  constructor(
    private servicePlan: PlanEstudioService,
    private serviceIdioma: IdiomaService) {
      this.load = true;
      this.planEstudios = [];
      this.selected = [];
     }
  ngOnInit() {
    this.getPlanEstudio();
  }

  public  getPlanEstudio() {
   this.servicePlan.getPlanDeEstudios().subscribe(data => {
      this.planes = data;
      this.getIdioma();
    }, error => {
      this.load = false;
      console.log(error);
    });
  }

  public getIdioma() {
    this.serviceIdioma.getIdioma().subscribe(data => {
      this.idiomaDTO = data;
      this.idiomaDTO.forEach(() => {
        this.selected.push(false);
      });
      this.load = false;
      this.setPlanEstudio();
      }, error => {
        this.load = false;
    });
  }

  public setPlanEstudio() {
    let i = 0;
    let j = 0;
    this.idiomaDTO.forEach(v => {
      this.planEstudios.push({idioma: v, plan: []});
      this.planes.forEach(p => {
        if (v.idIdioma === p.idIdioma) {
          this.planEstudios[i].plan[j] = p;
          j++;
        }
      });
      i++;
      j = 0;
    });
    console.log(this.planEstudios);
  }

  public showIdiomaPlan(i: number, plan: any) {
    this.planSelected = plan;
    let c = 0;
    this.selected.forEach(v => {
      if (c === i) {
        this.selected[c] = true;
      } else {
        this.selected[c] = false;
      }
      c++;
    })
   
  }
}
