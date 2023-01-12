import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'permalinkDisqus'
})
export class PermalinkDisqusPipe implements PipeTransform {

  transform(title: any): any {
    if (title == null) {
      return null;
    }
    return title
      .toLowerCase()
      .trim()
      .replace(/[\s]-[\s]/g, '-') // changing ' - ' to '-'
      .replace(/[\s]/g, '-')
      .replace(/[()]/g, '');
  }
}
