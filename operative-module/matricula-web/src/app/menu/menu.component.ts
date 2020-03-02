import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/MainMenu';
import { Router } from '@angular/router';

import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public success: boolean;
  public items: MenuItem[];
  public authentication: boolean;
  public modules: any[];
  public tipo: number;

  constructor(private router: Router, private serviceData: DataServiceService) {
    this.success = true;
    this.initAccesoSistema(false);
    this.tipo = this.serviceData.user.tipo;
  }

  ngOnInit() {
  }

  private initAccesoSistema(b: boolean) {
    this.modules = [
      {module: 1, state: false},
      {module: 2, state: false},
      {module: 3, state: false},
      {module: 4, state: false}];
    this.modules.forEach(value => {
      value.state = b;
    });
  }

  show(id: number) {
    this.modules.forEach(value => {
      if (value.module === id) {
        value.state = !value.state;
      } else {
        value.state = false;
      }
    });
  }

  public home() {
    this.router.navigate(['home']).then();
  }
}
