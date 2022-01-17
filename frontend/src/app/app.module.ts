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
  NbInputModule,
  NbIconModule,
  NbButtonGroupModule,
  NbPopoverModule,
  NbAccordionModule,
  NbActionsModule,
  NbCardModule,
  NbTabsetModule,
  NbSidebarModule,
  NbWindowModule, NbFormFieldModule, NbAutocompleteModule,
  NbTagModule, NbSelectModule
} from '@nebular/theme';

import { ProfileComponent } from './profile/profile.component';
import { DialogLogoutComponent } from './dialogLogout/dialogLogout.component';
import { DialogChangePasswordComponent } from './dialog-change-password/dialog-change-password.component';
  
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import { PreferencesanddietComponent } from './preferencesanddiet/preferencesanddiet.component';
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
    ProfileComponent,
    DialogLogoutComponent,
    DialogChangePasswordComponent,
    TabbarComponent,
    BeitraegeComponent,
    HinzufuegenComponent,
    ProduktinfosComponent,
    PreferencesanddietComponent,
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
    NbActionsModule,
    NbCardModule,
    NbTabsetModule,
    NbSidebarModule,
    NbWindowModule.forRoot(),

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
