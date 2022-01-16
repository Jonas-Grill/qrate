import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PreferencesanddietComponent} from "./preferencesanddiet/preferencesanddiet.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'preferencesanddiet', component: PreferencesanddietComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
