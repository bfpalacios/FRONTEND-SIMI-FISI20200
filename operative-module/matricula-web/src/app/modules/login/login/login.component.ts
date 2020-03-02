import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{

  public loading: string;
  public load: boolean;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.loading = 'assets/loading/loading.gif';
    this.load = true;
   }

  ngOnInit() {
  }

  ngAfterContentInit($event) {
    this.load = $event === 'true' ? true : false;
  }
}
