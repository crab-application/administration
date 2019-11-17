import {BrowserModule}            from '@angular/platform-browser';
import {NgModule}                 from '@angular/core';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {FontAwesomeModule}        from '@fortawesome/angular-fontawesome';

import { PanelModule } from 'primeng/primeng';

import {AppRoutingModule}         from './app-routing.module';
import {AppComponent}             from './app.component';
import {environment}              from './../environments/environment';

import {CommonsModule}            from './modules/commons/commons.module';
import {DocumentsModule}          from './modules/documents/documents.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    PanelModule,
    
    AppRoutingModule,
    CommonsModule,
    DocumentsModule
    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
