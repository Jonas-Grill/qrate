import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeitraegeComponent} from './beitraege/beitraege.component';
import {HinzufuegenComponent} from './hinzufuegen/hinzufuegen.component';
import {ProduktinfosComponent} from './produktinfos/produktinfos.component';
import {ProfileComponent} from "./profile/profile.component";
import {PreferencesAndDietComponent} from "./preferencesAndDiet/preferencesAndDiet.component";
import {BarcodeScannerComponent} from "./barcodeScanner/barcodeScanner.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profil', component: ProfileComponent},
  {path: 'ernaehrungsweise', component: PreferencesAndDietComponent},
  {path: 'beitraege', component: BeitraegeComponent},
  {path: 'hinzufuegen', component: HinzufuegenComponent},
  {path: 'produktinfo', component: ProduktinfosComponent},
  {path: 'barcodescanner', component: BarcodeScannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
