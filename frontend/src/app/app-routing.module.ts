import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PreferencesanddietComponent} from "./preferencesanddiet/preferencesanddiet.component";
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { ProduktinfosComponent } from './produktinfos/produktinfos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'preferencesanddiet', component: PreferencesanddietComponent}
  { path: 'beitraege', component: BeitraegeComponent },
  { path: 'hinzufuegen', component: HinzufuegenComponent },
  { path: 'produktinfo', component: ProduktinfosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
