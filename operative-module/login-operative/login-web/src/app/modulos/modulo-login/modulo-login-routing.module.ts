import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { LoginLoadingComponent } from './login-loading/login-loading.component';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'prueba',
  component: LoginLoadingComponent
},
{
  path:'createAccount', component: CreateAccountComponent
},
{
  path: '**',
  redirectTo: ''
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ModuleLoginRoutingModule {
}
