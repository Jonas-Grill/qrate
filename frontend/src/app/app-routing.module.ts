import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';

const routes: Routes = [
  { path: 'beitraege', component: BeitraegeComponent },
  { path: 'hinzufuegen', component: HinzufuegenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
