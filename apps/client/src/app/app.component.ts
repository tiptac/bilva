import { Component, HostListener } from '@angular/core';
import { MenuController, RefresherCustomEvent } from '@ionic/angular';
import { ScreenSizeService } from './common/services/screen-size-service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'bilva',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: ['/'] },
    { title: 'ABOUT US', url: ['/about'] },
    {
      title: 'BUSINESS VERTICALS',
      child: [
        { title: 'Realty Solutions', url: ['/business', 'own-it'] },
        { title: 'Event Management', url: ['/business', 'the-big-day'] },
      ],
    },
    { title: 'CAREER', url: ['/career'] },
    { title: 'CONTACT US', url: ['/contact'] },
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
