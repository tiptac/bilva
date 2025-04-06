import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[bilvaGoBack]',
})
export class GoBackDirective {
  constructor(private location: Location, private router: Router) {}

  @HostListener('click') onClick() {
    if (history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
