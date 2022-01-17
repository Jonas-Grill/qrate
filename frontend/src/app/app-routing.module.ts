import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { ProduktinfosComponent } from './produktinfos/produktinfos.component';

const routes: Routes = [
  { path: 'beitraege', component: BeitraegeComponent },
  { path: 'hinzufuegen', component: HinzufuegenComponent },
  { path: 'produktinfo', component: ProduktinfosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
