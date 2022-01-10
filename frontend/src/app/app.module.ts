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
  NbWindowModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { DialogLogoutComponent } from './dialogLogout/dialogLogout.component';
import { DialogChangePasswordComponent } from './dialog-change-password/dialog-change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DialogLogoutComponent,
    DialogChangePasswordComponent,
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
    NbWindowModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
