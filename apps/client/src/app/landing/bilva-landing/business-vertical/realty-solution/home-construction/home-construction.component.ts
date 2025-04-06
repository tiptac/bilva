import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-home-construction',
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home-construction.component.html',
  styleUrl: './home-construction.component.scss',
})
export class HomeConstructionComponent {
  appRoutes = appRoutes;

  menuItems = [
    {
      label: 'Our Projects',
      url: appRoutes.bilva.business.realtySolution.homeConstruction.ourProjects,
    },
    {
      label: 'Contract Comparision',
      url: appRoutes.bilva.business.realtySolution.homeConstruction
        .contractComparision,
    },
    {
      label: 'Testimonials',
      url: appRoutes.bilva.business.realtySolution.homeConstruction
        .testimonials,
    },
  ];
  selectedMenu = this.menuItems[0].label;

  constructor(private menuCtrl: MenuController, private location: Location) {}

  closeMenu(item: { label: string }) {
    this.selectedMenu = item.label;
    this.menuCtrl.close('home-construction');
  }
}
