import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-informacion-academica',
  templateUrl: './informacion-academica.component.html'
})
export class InformacionAcademicaComponent implements OnInit {

  constructor(
    private dataService: DataServiceService,
  ) { }

  ngOnInit() {
  }

}
