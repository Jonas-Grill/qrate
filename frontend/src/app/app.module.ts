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
  NbInputModule, NbIconModule, NbButtonGroupModule, NbPopoverModule, NbAccordionModule, NbFormFieldModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import {MatToolbarModule} from '@angular/material/toolbar';
import {NbTabsetModule, NbCardModule, NbActionsModule} from '@nebular/theme';
import { TabbarComponent } from './tabbar/tabbar.component';
import { BeitraegeComponent } from './beitraege/beitraege.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabbarComponent,
    BeitraegeComponent,
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
    NbFormFieldModule,
    MatToolbarModule,
    NbTabsetModule,
    NbCardModule,
    NbActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
