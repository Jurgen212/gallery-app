import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedMenuComponent } from './shared-menu/shared-menu.component';


@NgModule({
  declarations: [
    SharedMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedMenuComponent
  ]
})
export class SharedModule { }
