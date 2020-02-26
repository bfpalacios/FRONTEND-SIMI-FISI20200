import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/authentication/login.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-buttons',
  templateUrl: './section-buttons.component.html',
  styleUrls: ['./section-buttons.component.css']
})
export class SectionButtonsComponent implements OnInit {

  public auth: boolean;
  public user: User;
  @Output() public emitter;
  public load: boolean;
  constructor(
    private service: LoginService,
    private toastService: ToastrService
  ) {
    this.emitter = new EventEmitter();
    this.load = false;
    this.auth = false;
   }

  ngOnInit() {
  }

  public updateLoad() {
    this.load = !this.load;
    this.emitter.emit(this.load.toString());
  }


  href() {
    location.href ="https://ceidletras.unmsm.edu.pe/";
  }

  goIdiomas() {
    location.href = "https://ceidletras.unmsm.edu.pe/ingles.html";
  }

  public signInLikeInvited() {
    this.updateLoad();
    console.log('Ingresando como invitado');
    this.service.signInLikeInvited().subscribe(data => {
      this.updateLoad();
      this.auth = true;
      this.user = data;
      console.log(this.user);
      this.simiMatriculaOnline();
    }, () => {
      this.updateLoad();
      this.toastService.info('No se puede ingresar como invitado en estos momentos.');
    });
  }

  private simiMatriculaOnline() {
    if (this.auth && this.user != null) {
      location.href ="/matriculaOnline";
    } else {
      this.toastService.info('No se puede acceder al sistema en estos momentos.');
    }
  }
}
