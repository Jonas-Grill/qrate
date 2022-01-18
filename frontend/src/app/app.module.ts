import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbAlertModule,
  NbCheckboxModule, NbCardModule,
  NbInputModule, NbIconModule, NbButtonGroupModule, NbPopoverModule, NbAccordionModule, NbCardComponent
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {PreferencesanddietComponent} from './preferencesanddiet/preferencesanddiet.component';
import {BarcodescannerComponent} from './barcodescanner/barcodescanner.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    NbPopoverModule,
    NbAccordionModule,
    NbCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
