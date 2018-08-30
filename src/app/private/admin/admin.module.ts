import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminHomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';

import { adminRoutes } from './admin.routes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(adminRoutes, { useHash: false })
  ],
  providers: [],
  exports: [],
  declarations: [Page1Component, AdminHomeComponent]
})

export class AdminModule { }
