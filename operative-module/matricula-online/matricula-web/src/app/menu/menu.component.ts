import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/MainMenu';

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

  constructor() {
    this.success = true;
    this.initAccesoSistema(false);
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
    console.log(id);
    this.modules.forEach(value => {
      if (value.module === id) {
        value.state = !value.state;
      } else {
        value.state = false;
      }
    });
  }

}
