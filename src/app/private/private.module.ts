import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EtdModule } from './etd/etd.module';
import { AdminModule } from './admin/admin.module';

import { PrivateComponent } from './private.component';

@NgModule({
  imports: [
  	EtdModule,
  	AdminModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  exports: [PrivateComponent],
  declarations: [PrivateComponent]
})

export class PrivateModule { }
