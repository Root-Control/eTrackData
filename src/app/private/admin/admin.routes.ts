import { Page1Component } from './page1/page1.component';
import { AdminHomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from '../../_layout/app-layout/app-layout.component';

export const adminRoutes: Routes = [
    { 
        path: 'admin', 
        component: AppLayoutComponent,
        children: [
          { path: '', component: AdminHomeComponent, pathMatch: 'full'},
          { path: 'page1', component: Page1Component },
        ]
    },
];