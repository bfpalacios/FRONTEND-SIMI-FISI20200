import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/infrastructure/constans/Path';
import { Mensaje } from 'src/app/infrastructure/constans/Mensaje';
import Swal from 'sweetalert2';
import { HoraService } from 'src/app/services/administracion/AdmInstitucional/hora.service';
import { DiaService } from 'src/app/services/administracion/AdmInstitucional/dia.service';
import { Hora } from 'src/app/domain/Hora';
import { Dia } from 'src/app/domain/Dia';

@Component({
  selector: 'app-create-horario',
  templateUrl: './create-horario.component.html',
  styleUrls: ['./create-horario.component.css']
})
export class CreateHorarioComponent implements OnInit {
 
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public pmcompuesta : boolean;
  public selectedTypeIdDia : number;
  public selectedTypeIdHora : number;
  public dias : Dia[];
  public horas : Hora[];



  constructor(private router: Router, private serviceDias: DiaService, private serviceHoras: HoraService )  {
    this.selectedTypeIdDia = 0;
    this.selectedTypeIdHora = 0;
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
  }

  

  ngOnInit() {//lenar cmbs
    this.getDias();
    this.getHoras();

  }
  private getDias() {
    this.serviceDias.getDias().subscribe(data => {
      this.dias = data;
      this.load = false;
    });
  }

  private getHoras() {
    this.serviceHoras.getHoras().subscribe(data => {
      this.horas = data;
      this.load = false;
    });
  }

  
  crearHorario(){
      this.navigateList();
      this.load = false;
    }

    cancelar(){
      this.navigateList();
      this.load = false;
    }
    
    private navigateList() {
      this.router.navigate(['administracionInstitucional/horarios']).then();
    }

    crear(){
      
    }
  }

