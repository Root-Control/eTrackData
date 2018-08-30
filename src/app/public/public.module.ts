import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PublicComponent } from './public.component';
import { publicRoutes } from './public.routes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(publicRoutes, { useHash: false })
  ],
  providers: [],
  exports: [PublicComponent],
  declarations: [LoginComponent, PublicComponent, RegisterComponent]
})

export class PublicModule { }
