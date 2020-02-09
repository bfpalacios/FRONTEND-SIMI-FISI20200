import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './feed/news/news.component';
import { LenguajesComponent } from './feed/lenguajes/lenguajes.component';
import { InfoMatriculaComponent } from './feed/info-matricula/info-matricula.component';



@NgModule({
  declarations: [FeedComponent, NewsComponent, LenguajesComponent, InfoMatriculaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
