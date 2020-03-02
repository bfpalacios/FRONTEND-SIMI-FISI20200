import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  public date: number;
  private sub: Subscription;
  showFiller = false;
  mobileQuery: MediaQueryList;
  mobile: MediaQueryList;
  mobileListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private route: ActivatedRoute) {
    this.date = Date.now();
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
   // this.getAuthentication();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  public getAuthentication() {
    let email: string;
    let id: string;
    let type: string;
    this.sub = this.route.params.subscribe(params => {
      email = params['email'];
      id = params['id'];
      type = params['type'];
    });
    console.log(email);
  }


}
