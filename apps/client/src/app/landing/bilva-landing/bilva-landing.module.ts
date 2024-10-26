import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BilvaLandingComponent } from './bilva-landing.component';
import { CommonModule } from '@angular/common';
import { BilvaLandingRoutingModule } from './bilva-landing-routing.module';

@NgModule({
  declarations: [BilvaLandingComponent],
  imports: [CommonModule, IonicModule, BilvaLandingRoutingModule],
  providers: [],
})
export class BilvaLandingModule {}
