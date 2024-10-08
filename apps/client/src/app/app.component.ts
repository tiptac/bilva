import { Component, HostListener } from '@angular/core';
import { MenuController, RefresherCustomEvent } from '@ionic/angular';
import { ScreenSizeService } from '../common/services/screen-size-service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'bilva',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

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
