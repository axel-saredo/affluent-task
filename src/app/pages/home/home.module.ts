import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { MaterialModule } from '../../modules/material/material.module';
import { UsersComponent } from '../../components/users/users.component';
import { DatesComponent } from '../../components/dates/dates.component';

@NgModule({
  declarations: [
    UsersComponent,
    DatesComponent
  ],
  exports: [
    UsersComponent,
    DatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
