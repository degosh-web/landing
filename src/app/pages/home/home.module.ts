import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';

/* translation stuff
import { TranslateModule } from '@ngx-translate/core'; */

import { HomeComponent } from './home.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CenterComponent } from 'src/app/components/center/center.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    CenterComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    /* translation stuff
      TranslateModule,
    */

  ],
  exports: [
    HomeComponent,
    CenterComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
