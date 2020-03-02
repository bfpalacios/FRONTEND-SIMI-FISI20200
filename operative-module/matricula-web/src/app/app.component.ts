import { Component, ChangeDetectorRef, OnInit, DoCheck } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { DataServiceService } from './services/data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit/* , DoCheck */ {
  public date: number;
  // public authenticated: boolean;
  showFiller = false;
  mobileQuery: MediaQueryList;
  mobile: MediaQueryList;
  mobileListener: () => void;
  public name: string;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public service: DataServiceService,
    private router: Router) {
    this.date = Date.now();
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
    // this.getAuthentication();
  }

  ngOnInit() {
    this.getNameUser();
  }


  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  public logout(snav: any) {
    if (snav.opened === true) {
      snav.toggle();
    }
    sessionStorage.clear();
    localStorage.clear();
    this.service.authenticated = false;
    this.router.navigate(['login']);
  }


  public getNameUser() {
    if ( this.service.obtenerDatosUsuario() != null) {
      this.service.obtenerDatosUsuario().subscribe(data => {
        this.name = data.nombre + ' ' + data.apPaterno + ' ' + data. apMaterno;
      }, () => {
        console.log('ERROR');
      });
    }
  }

}
