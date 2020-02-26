import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserDTO } from 'src/app/models/UserDTO';
import { FormRegisterComponent } from './form-register/form-register.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {
  public showDatosPersonales: boolean;
  public loading: string;
  public load: boolean;
  public newUser: UserDTO;
  @ViewChild(FormRegisterComponent) child;

  constructor() {
    this.loading = 'assets/loading/loading.svg';
    this.load = false;
    this.newUser = new UserDTO();

    this.showDatosPersonales = false;
   }

  ngOnInit() {
  }

  ngAfterContentInit($event) {
    console.log($event);
    this.showDatosPersonales = $event === 'true' ? true : false;
  }

  ngAfterViewInit() {
    this.newUser = this.child.newUser;
    console.log('Obteniendo usuario ->', this.newUser);
  }
}
