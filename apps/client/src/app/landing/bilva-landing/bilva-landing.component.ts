import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, RefresherCustomEvent } from '@ionic/angular';
import { ScreenSizeService } from '../../../common/services/screen-size-service';
import { appRoutes } from '../../app.routes';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'bilva-bilva-landing',
  templateUrl: './bilva-landing.component.html',
  styleUrl: './bilva-landing.component.scss',
})
export class BilvaLandingComponent implements OnInit {
  appRoutes = appRoutes;
  public appPages = [
    { title: () => 'HOME', url: appRoutes.bilva.home },
    { title: () => 'ABOUT US', url: appRoutes.bilva.about },
    {
      title: () => 'BUSINESS',
      child: [
        {
          title: () => 'Realty Solutions',
          url: appRoutes.bilva.business.ownIt,
          visible: () => true,
        },
        {
          title: () => 'Event Management',
          url: appRoutes.bilva.business.theBigDay,
          visible: () => true,
        },
      ],
    },
    { title: () => 'CAREER', url: appRoutes.bilva.career },
    { title: () => 'CONTACT', url: appRoutes.bilva.contact },
    {
      title: () => 'USER',
      child: [
        {
          title: () =>
            (<{ fullName: string }>this.sessionService.user())?.fullName,

          visible: () => {
            const visible = this.loggedIn();
            return visible;
          },
          clicked: () => {
            this.closeMenu();
          },
        },
        {
          title: () => 'Logout',

          visible: () => {
            const visible = this.loggedIn();
            return visible;
          },
          clicked: () => {
            this.sessionService.delete().subscribe(() => {
              this.closeMenu();
            });
          },
        },
        {
          title: () => 'Login',
          url: appRoutes.bilva.user.login,
          visible: () => {
            const visible = !this.loggedIn();
            return visible;
          },
        },
        {
          title: () => 'Sign Up',
          url: appRoutes.bilva.user.signup,
          visible: () => {
            const visible = !this.loggedIn();
            return visible;
          },
        },
      ],
    },
  ];

  currentYear = new Date().getFullYear();
  constructor(
    private menuCtrl: MenuController,
    private screenSizeService: ScreenSizeService,
    private sessionService: SessionService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenSizeService.onResize();
  }

  ngOnInit(): void {
    this.sessionService.check().subscribe();
  }

  handleRefresh(event: RefresherCustomEvent) {
    window.location.reload();
    event.target.complete();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  private loggedIn() {
    return this.sessionService.loggedIn();
  }
}
