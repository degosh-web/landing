import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';
import { RouterModule } from '@angular/router';

import { HomeModule } from '../home/home.module';
import { TermsRoutes } from './terms.routes';

@NgModule({
  declarations: [TermsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TermsRoutes),
    HomeModule
  ]
})
export class TermsModule { }
