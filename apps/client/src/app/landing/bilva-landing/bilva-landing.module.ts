import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BilvaLandingComponent } from './bilva-landing.component';
import { CommonModule } from '@angular/common';
import { BilvaLandingRoutingModule } from './bilva-landing-routing.module';
import { GoBackDirective } from '../../common/directives/go-back.directive';

@NgModule({
  declarations: [BilvaLandingComponent],
  imports: [
    CommonModule,
    IonicModule,
    GoBackDirective,
    BilvaLandingRoutingModule,
  ],
  providers: [],
})
export class BilvaLandingModule {}
