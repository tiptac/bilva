import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    options: {
      limit?: number;
      completeWords?: boolean;
      ellipsis?: string;
    }
  ) {
    let limit = options.limit || 25;
    const completeWords = options.completeWords || false;
    const ellipsis = options.ellipsis || '...';

    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
