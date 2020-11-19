import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MemberManagementModule } from './member-management/member-management.module';
import { MemberFormModule } from './member-form/member-form.module';
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    MemberFormModule,
    MemberManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
