import { WizardComponent } from './wizard/wizard.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'home', component: NavComponent},
  {path: 'start', component: WizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
