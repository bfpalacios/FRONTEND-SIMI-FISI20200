import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
