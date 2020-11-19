import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, NotfoundComponent],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent, HomeComponent, NotfoundComponent]
})
export class GlobalModule { }
