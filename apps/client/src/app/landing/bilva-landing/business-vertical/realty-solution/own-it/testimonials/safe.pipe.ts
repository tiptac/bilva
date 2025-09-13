import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeUrl' })
export class SafeUrl implements PipeTransform {
  constructor(private domainSanitizerService: DomSanitizer) {}
  transform(url: string) {
    return this.domainSanitizerService.bypassSecurityTrustResourceUrl(url);
  }
}
