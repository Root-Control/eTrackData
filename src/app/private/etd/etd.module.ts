import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { etdRoutes } from './etd.routes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(etdRoutes, { useHash: false })
  ],
  providers: [],
  exports: [],
  declarations: [AboutComponent, HomeComponent, DashboardComponent, ProfileComponent]
})

export class EtdModule { }
