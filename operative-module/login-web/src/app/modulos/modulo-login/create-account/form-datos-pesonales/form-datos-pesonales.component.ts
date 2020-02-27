import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmiiterBuilder } from 'src/app/models/EmiiterBuilder';
import { UserDTO } from 'src/app/models/UserDTO';

@Component({
  selector: 'app-form-datos-pesonales',
  templateUrl: './form-datos-pesonales.component.html'
})
export class FormDatosPesonalesComponent implements OnInit {

  public showDatosPersonales: boolean;
  @Output() public emitter;
  @Input()  public newUser: UserDTO;
  constructor(
    private router: Router
  ) { 
    this.showDatosPersonales = true;
    this.newUser = new UserDTO();
    this.emitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public back() {
    console.log('Usuario->', this.newUser);
    EmiiterBuilder.emitterUpdate(this.emitter, this.showDatosPersonales);
  }

  public signIn() {
    console.log('Usuario->', this.newUser);
    console.log('Usuario Tipo Alumno creado.');
    this.router.navigate(['/']);
  }

}
