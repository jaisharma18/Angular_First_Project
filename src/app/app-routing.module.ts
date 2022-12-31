import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DataComponent } from './data/data.component';
import { NavigatorComponent } from './navigator/navigator.component';

const routes: Routes = [
  { path: '', redirectTo: 'login-form', pathMatch: 'full'},
  { path: 'login-form', component: LoginFormComponent },
  { path: 'data', component: DataComponent },
  { path: 'navigator', component: NavigatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
