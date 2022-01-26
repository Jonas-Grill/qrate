import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbAutocompleteModule,
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbPopoverModule,
  NbSelectModule,
  NbSidebarModule,
  NbTabsetModule,
  NbTagModule,
  NbThemeModule,
  NbWindowModule,
} from '@nebular/theme';

import {NbEvaIconsModule} from '@nebular/eva-icons';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {PreferencesAndDietComponent} from './preferencesAndDiet/preferencesAndDiet.component';
import {BarcodeScannerComponent} from './barcodeScanner/barcodeScanner.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {TabbarComponent} from './tabbar/tabbar.component';
import {BeitraegeComponent} from './beitraege/beitraege.component';
import {HinzufuegenComponent} from './hinzufuegen/hinzufuegen.component';
import {ProduktinfosComponent} from './produktinfos/produktinfos.component';
import {ProfileComponent} from './profile/profile.component';
import {DialogLogoutComponent} from './dialogLogout/dialogLogout.component';
import {DialogChangePasswordComponent} from './dialogChangePassword/dialogChangePassword.component';
import {userDataRequests} from "./backendRequests/userDataRequests";
import {foodRequests} from './backendrequests/fooddatarequests';

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
    PreferencesAndDietComponent,
    BarcodeScannerComponent,
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
    NbCardModule,
    NbTabsetModule,
    NbSidebarModule,
    NbWindowModule.forRoot(),
    NbFormFieldModule,
    NbAutocompleteModule,
    NbTagModule,
    NbSelectModule,
    MatToolbarModule,
    NbActionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    foodRequests,
    userDataRequests
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
