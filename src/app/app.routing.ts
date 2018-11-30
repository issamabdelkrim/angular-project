import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ModuleWithProviders } from '@angular/core' ;
import {Routes, RouterModule} from '@angular/router' ;

const appRoutes: Routes = [
    {
        path: 'estimation',
        component: EstimationCoutComponent
      },
  
    {
      path: 'listAnnonces',
      component: ListeAnnoncesComponent
    },
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: AnnoncesComponent
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
