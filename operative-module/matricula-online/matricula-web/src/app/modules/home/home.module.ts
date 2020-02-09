import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './feed/news/news.component';



@NgModule({
  declarations: [FeedComponent, NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
