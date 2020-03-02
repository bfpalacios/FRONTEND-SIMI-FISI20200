import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
},
{
  path: 'feed',
  component: FeedComponent,
},
{
  path: '**',
  redirectTo: ''
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
