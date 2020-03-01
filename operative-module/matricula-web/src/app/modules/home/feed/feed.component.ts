import { Component, OnInit, ViewChild, Output, EventEmitter, DoCheck } from '@angular/core';
import { DatosUsuarioFeedComponent } from '../datos-usuario-feed/datos-usuario-feed.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, DoCheck {

  public load: boolean;
  public userDates: any;

  constructor() {
    this.load = true;
    this.userDates = new Object();
  }

  ngOnInit() {
    localStorage.setItem('SIMI-LOAD-HOME', 'true');
  }

  ngDoCheck() {
    const l = localStorage.getItem('SIMI-LOAD-HOME');
    this.load = l === 'true' ? true : false;
  }
}
