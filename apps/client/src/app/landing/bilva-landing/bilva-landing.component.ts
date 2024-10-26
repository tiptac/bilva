import { Component, HostListener } from '@angular/core';
import { MenuController, RefresherCustomEvent } from '@ionic/angular';
import { ScreenSizeService } from '../../../common/services/screen-size-service';
import { appRoutes } from '../../app.routes';

@Component({
  selector: 'bilva-bilva-landing',
  templateUrl: './bilva-landing.component.html',
  styleUrl: './bilva-landing.component.scss',
})
export class BilvaLandingComponent {
  appRoutes = appRoutes;
  public appPages = [
    { title: 'HOME', url: appRoutes.bilva.home },
    { title: 'ABOUT US', url: appRoutes.bilva.about },
    {
      title: 'BUSINESS VERTICALS',
      child: [
        { title: 'OWN IT', url: appRoutes.bilva.business.ownIt },
        { title: 'THE BIG DAY', url: appRoutes.bilva.business.theBigDay },
      ],
    },
    { title: 'CAREER', url: appRoutes.bilva.career },
    { title: 'CONTACT US', url: appRoutes.bilva.contact },
  ];

  currentYear = new Date().getFullYear();
  constructor(
    private menuCtrl: MenuController,
    private screenSizeService: ScreenSizeService
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
}
