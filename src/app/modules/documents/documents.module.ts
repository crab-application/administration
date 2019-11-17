import {BrowserModule}    from '@angular/platform-browser';
import {NgModule}         from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { PanelModule } from 'primeng/primeng';

import {DocumentsView} from './views/documents_view/documents.view';

@NgModule({
  declarations: [
    DocumentsView
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PanelModule
  ],
  exports:[
    DocumentsView
  ],
  providers: [
    
  ]
})
export class DocumentsModule { }
