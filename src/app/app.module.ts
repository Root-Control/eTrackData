import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AmsLayoutComponent } from './_layout/ams-layout/ams-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { AmsHeaderComponent } from './_layout/ams-header/ams-header.component';
import { AmsFooterComponent } from './_layout/ams-footer/ams-footer.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [
  	BrowserModule, 
  	FormsModule, 
  	routing, 
  	PublicModule,
    PrivateModule
  ],
  declarations: [ 
  	AppComponent, 
  	HelloComponent, 
  	AppLayoutComponent, 
  	AmsLayoutComponent, 
  	AppHeaderComponent, 
  	AmsHeaderComponent, 
  	AmsFooterComponent, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }