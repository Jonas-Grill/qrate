import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeitraegeComponent } from './beitraege/beitraege.component';

const routes: Routes = [
  { path: 'beitraege', component: BeitraegeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
