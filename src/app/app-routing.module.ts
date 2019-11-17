import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundView}         from './modules/commons/views/not_found_view/not.found.view';
import {HomeView}             from './modules/commons/views/home_view/home.view';

import {DocumentsView} from './modules/documents/views/documents_view/documents.view';

const routes: Routes = [
  
  { path: 'documents'  , component: DocumentsView},
  { path: ''  , component: HomeView, pathMatch: 'full'},
  { path: '**', component:NotFoundView},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
