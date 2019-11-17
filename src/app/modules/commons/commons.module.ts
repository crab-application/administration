import {BrowserModule}    from '@angular/platform-browser';
import {NgModule}         from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {CONSTANTS}        from './constants/constants';
import {SessionScope}     from './scopes/session.scope';

import {HeaderService}    from './services/header.service';
import {HttpService}      from './services/http.service';


import {NotFoundView}     from './views/not_found_view/not.found.view';
import {HomeView}         from './views/home_view/home.view';
@NgModule({
  declarations: [
    NotFoundView,
    HomeView
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports:[
    NotFoundView,
    HomeView
  ],
  providers: [
    HeaderService,
    HttpService,
    SessionScope
  ]
})
export class CommonsModule { }
