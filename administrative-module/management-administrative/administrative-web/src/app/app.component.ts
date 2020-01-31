import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  showFiller = false;
  mobileQuery: MediaQueryList;

  mobile: MediaQueryList;
  mobileListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  prueba() {
    this.router.navigate(['home/feed']).then();
  }

  prueba2() {
    this.router.navigate(['administracion/listUsuarios']).then();
  }
}
