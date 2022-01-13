import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule, NbIconModule, NbButtonGroupModule, NbPopoverModule, 
  NbAccordionModule, NbFormFieldModule, NbAutocompleteModule,
  NbTagModule, NbSelectModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {NbTabsetModule, NbCardModule, NbActionsModule} from '@nebular/theme';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import { TabbarComponent } from './tabbar/tabbar.component';
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { ProduktinfosComponent } from './produktinfos/produktinfos.component';
import { BarcodescannerComponent } from './barcodescanner/barcodescanner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabbarComponent,
    BeitraegeComponent,
    HinzufuegenComponent,
    ProduktinfosComponent,
    BarcodescannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbAlertModule,
    NbCheckboxModule,
    NbInputModule,
    NbIconModule,
    NbButtonGroupModule,
    FormsModule,
    ReactiveFormsModule,
    NbPopoverModule,
    NbAccordionModule,
    NbFormFieldModule,
    NbAutocompleteModule,
    NbTagModule,
    NbSelectModule,
    MatToolbarModule,
    NbTabsetModule,
    NbCardModule,
    NbActionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
