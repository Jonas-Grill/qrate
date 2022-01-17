import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { ProduktinfosComponent } from './produktinfos/produktinfos.component';
import {ProfileComponent} from "./profile/profile.component";
import {PreferencesanddietComponent} from "./preferencesanddiet/preferencesanddiet.component";
import {BarcodescannerComponent} from "./barcodescanner/barcodescanner.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'profil', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'preferencesanddiet', component: PreferencesanddietComponent },
  { path: 'beitraege', component: BeitraegeComponent },
  { path: 'hinzufuegen', component: HinzufuegenComponent },
  { path: 'produktinfo', component: ProduktinfosComponent },
  { path: 'barcodescanner', component: BarcodescannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
