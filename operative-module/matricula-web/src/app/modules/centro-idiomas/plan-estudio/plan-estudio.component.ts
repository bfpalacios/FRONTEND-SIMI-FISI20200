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
}
