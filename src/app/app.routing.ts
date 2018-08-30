import { Routes, RouterModule } from '@angular/router';

import { AmsLayoutComponent } from './_layout/ams-layout/ams-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';


const appRoutes: Routes = [    
    // App routes goes here
    
/*    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent }
        ]
    },*/
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


