import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {

  @Input()
  public datos: any;

  constructor() {
  }

  ngOnInit() {
  }

}
