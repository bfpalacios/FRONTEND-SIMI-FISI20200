import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeedComponent } from './feed/feed.component';
import { CardMainComponent } from './main/card-main/card-main.component';
import { AccesosDirectoComponent } from './main/accesos-directo/accesos-directo.component';



@NgModule({
  declarations: [MainComponent, FeedComponent, CardMainComponent, AccesosDirectoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
