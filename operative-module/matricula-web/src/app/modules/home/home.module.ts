import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './feed/news/news.component';
import { LenguajesComponent } from './feed/lenguajes/lenguajes.component';
import { InfoMatriculaComponent } from './feed/info-matricula/info-matricula.component';
import { DatosUsuarioFeedComponent } from './datos-usuario-feed/datos-usuario-feed.component';



@NgModule({
  declarations: [FeedComponent, NewsComponent, LenguajesComponent, InfoMatriculaComponent, DatosUsuarioFeedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
