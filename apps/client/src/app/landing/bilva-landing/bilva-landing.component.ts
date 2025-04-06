import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, RefresherCustomEvent } from '@ionic/angular';
import { ScreenSizeService } from '../../common/services/screen-size-service';
import { appRoutes } from '../../app.routes';

@Component({
  selector: 'bilva-bilva-landing',
  templateUrl: './bilva-landing.component.html',
  styleUrl: './bilva-landing.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class BilvaLandingComponent {
  appRoutes = appRoutes;
  public appPages = [
    { title: 'HOME', url: appRoutes.bilva.home },
    { title: 'ABOUT US', url: appRoutes.bilva.about },
    {
      title: 'BUSINESS',
      child: [
        {
          title: 'Realty Solutions',
          url: appRoutes.bilva.business.realtySolution.ownIt,
        },
        {
          title: 'Event Management',
          url: appRoutes.bilva.business.eventManagement.theBigDay,
        },
      ],
    },
    { title: 'CAREER', url: appRoutes.bilva.career },
    { title: 'CONTACT', url: appRoutes.bilva.contact },
  ];

  currentYear = new Date().getFullYear();
  constructor(
    private menuCtrl: MenuController,
    private screenSizeService: ScreenSizeService,
    private location: Location,
    private router: Router
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenSizeService.onResize();
  }

  handleRefresh(event: RefresherCustomEvent) {
    window.location.reload();
    event.target.complete();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  goBack() {
    if (history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(appRoutes.bilva.home);
    }
  }

  refresh() {
    window.location.reload();
  }
}
