import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmiiterBuilder } from 'src/app/models/EmiiterBuilder';
import { UserDTO } from 'src/app/models/UserDTO';
import { RegisterService } from 'src/app/services/authentication/regiter.service';

@Component({
  selector: 'app-form-datos-pesonales',
  templateUrl: './form-datos-pesonales.component.html'
})
export class FormDatosPesonalesComponent implements OnInit {

  public showDatosPersonales: boolean;
  @Output() public emitter;
  @Input()  public newUser: UserDTO;
  constructor(
    private router: Router,
    private service: RegisterService
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
    this.service.signUpWithEmailAndPassword(this.newUser).subscribe(data => {
      console.log('oink');
    }, () => {
      console.log('error');
    });
   
  }

}
