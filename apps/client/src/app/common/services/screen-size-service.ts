import { Injectable } from '@angular/core';
import { ScreenSize, screenSizeBreakpoints } from '../models/screen-size';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService {
  private innerWidth = window.innerWidth;

  onResize() {
    this.innerWidth = window.innerWidth;
  }

  get screenSize(): ScreenSize {
    if (this.innerWidth <= screenSizeBreakpoints.sm) {
      return ScreenSize.sm;
    } else if (this.innerWidth <= screenSizeBreakpoints.md) {
      return ScreenSize.md;
    } else if (this.innerWidth <= screenSizeBreakpoints.lg) {
      return ScreenSize.lg;
    }
    return ScreenSize.xl;
  }

  get isSmall(): boolean {
    return this.screenSize === ScreenSize.sm;
  }
  get isMedium(): boolean {
    return this.screenSize === ScreenSize.md;
  }
  get isLarge(): boolean {
    return this.screenSize === ScreenSize.lg;
  }
  get isExtraLarge(): boolean {
    return this.screenSize === ScreenSize.xl;
  }
}
