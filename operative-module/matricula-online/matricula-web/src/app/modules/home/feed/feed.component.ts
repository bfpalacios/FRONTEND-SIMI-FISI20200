import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public photos: any[];
  constructor() {
    this.photos = [];
    this.photos.push(
      {image: 'assets/logo-language/ingles.svg'},
      {image: 'assets/logo-language/coreano.svg'},
      {image: 'assets/logo-language/aleman.svg'},
      {image: 'assets/logo-language/quechua.svg'},
      {image: 'assets/logo-language/italiano.svg'},
      {image: 'assets/logo-language/portugues.svg'},
      {image: 'assets/logo-language/japones.svg'},
      {image: 'assets/logo-language/frances.svg'});

   }

  ngOnInit() {
  }

}
