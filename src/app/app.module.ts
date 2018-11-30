import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [

  {
    path: 'estimation',
    component: EstimationCoutComponent
  },

{
  path: 'listAnnonce',
  component: ListeAnnoncesComponent
},
{
  path: '',
  redirectTo: '/annonces',
  pathMatch: 'full'
},
{
  path: '**',
  component: AnnoncesComponent
},
];

@NgModule({
  declarations: [
    AppComponent,

    ListeAnnoncesComponent,
    AnnoncesComponent,
    EstimationCoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, routing, HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
