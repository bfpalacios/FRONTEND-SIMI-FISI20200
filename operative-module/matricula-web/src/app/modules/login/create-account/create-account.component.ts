import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDTO } from 'src/app/models/UserDTO';
import { FormRegisterComponent } from './form-register/form-register.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {
  public loading: string;
  public load: boolean;

  constructor() {
    this.loading = 'assets/loading/loading.svg';
    this.load = false;

  }

  ngOnInit() {
  }

}
