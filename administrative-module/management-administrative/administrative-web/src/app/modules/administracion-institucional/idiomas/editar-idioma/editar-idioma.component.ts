import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Path } from 'src/app/infrastructure/constans/Path';


@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.css']
})
export class EditarIdiomaComponent implements OnInit {
  public id: number;
  public load: boolean;
  public loading: string;
  public empty: boolean;
  public successText: string;
  public pmcompuesta : boolean;
  public success: boolean;
  public selectedTypePerfil: number;
  public selectedTypeEstado: number;
  constructor(private router: Router)  {
    this.load = true;
    this.empty = false;
    this.loading = Path.loading;
    this.success = false;
  }

  ngOnInit() {
  }


  cancelar(){
    this.navigateList();
  }
  eliminar(){
    this.navigateList();
  }
  guardar(){
    this.navigateList();
  }


  private navigateList() {
    this.router.navigate(['administracionInstitucional/idiomas']).then();
  }

}
