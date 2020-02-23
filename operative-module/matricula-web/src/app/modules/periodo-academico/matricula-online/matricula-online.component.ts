import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-matricula-online',
  templateUrl: './matricula-online.component.html',
  styleUrls: ['./matricula-online.component.css']
})
export class MatriculaOnlineComponent implements OnInit {

  public error: boolean;
  public load: boolean;
  public pagosRealizados: any[];
  constructor(private router: Router,
    private dataService: DataServiceService,
    private toast: ToastrService) {
      this.error = false;
      this.load = true;

  }

  ngOnInit() {
    this.init();
  }

  private init() {
   this.getPagosSinUsar();
  }

  private getPagosSinUsar() {
    this.dataService.getPagosSinUsar().subscribe(data => {
      this.load = false;
      this.pagosRealizados = data;
    },
    () => {
      this.error = true;
      this.toast.error('Ocurrió un error.');
    });

  }

  public goMatricular() {
    this.router.navigate(['/periodo-academico/matriculaOnline/matricular']).then();
  }
}
