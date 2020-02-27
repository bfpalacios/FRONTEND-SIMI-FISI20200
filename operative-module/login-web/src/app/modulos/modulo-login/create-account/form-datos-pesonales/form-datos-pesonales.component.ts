import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EmiiterBuilder } from 'src/app/models/EmiiterBuilder';

@Component({
  selector: 'app-form-datos-pesonales',
  templateUrl: './form-datos-pesonales.component.html'
})
export class FormDatosPesonalesComponent implements OnInit {

  public showDatosPersonales: boolean;
  @Output() public emitter;
  constructor(
    private router: Router
  ) { 
    this.showDatosPersonales = true;
    this.emitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public back() {
    EmiiterBuilder.emitterUpdate(this.emitter, this.showDatosPersonales);
  }

  public signIn() {
    this.showDatosPersonales = !this.showDatosPersonales;
  }

}
