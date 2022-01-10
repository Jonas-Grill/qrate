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
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
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
    NbActionsModule,
    NbCardModule,
    NbTabsetModule,
    NbSidebarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
