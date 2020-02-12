import { Component, ChangeDetectorRef, OnInit, DoCheck } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, DoCheck {
  public date: number;

  showFiller = false;
  mobileQuery: MediaQueryList;
  mobile: MediaQueryList;

  navOpen: boolean;
  title: string;

  mobileListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.date = Date.now();
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
    this.title = 'simi - Administración Académica';
  }

  ngOnInit() {
    this.navOpen = false;
  }
  ngDoCheck() {
    this.title = localStorage.getItem('title');
    // const auth = localStorage.getItem('authentication');
    // this.getAuth(auth);
  }
  cleanTitle() {
    localStorage.removeItem('title');
  }
  logout() {
    this.navOpen = false;
    localStorage.clear();
    // this.authentication = false;
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }
  navOpenClose() {

    this.navOpen = !this.navOpen;

  }

}
