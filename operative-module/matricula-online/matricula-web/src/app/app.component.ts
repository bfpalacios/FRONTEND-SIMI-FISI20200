import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  showFiller = false;
  mobileQuery: MediaQueryList;
 // @ViewChild('snav') public nav: MatSidenav;
  mobile: MediaQueryList;
  mobileListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
  }

  ngOnInit() {
  }

  oink(){
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  public home() {
    this.router.navigate(['home']).then();
  }


}
