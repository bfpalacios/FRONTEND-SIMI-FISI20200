import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  showFiller = false;
  mobileQuery: MediaQueryList;

  mobile: MediaQueryList;
  mobileListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router) {
    this.mobile = media.matchMedia('(max-width: 500px)');
    this.mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this.mobileListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this.mobileListener);
  }

  cancelarMatriculaOnline() {
    this.router.navigate(['periodo-academico/matriculaOnline']).then();
  }

}
