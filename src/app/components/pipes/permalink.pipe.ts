import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'permalink'
})
export class PermalinkPipe implements PipeTransform {

  transform(title: any): any {
    if (title == null) {
      return null;
    }
    return title
      .toLowerCase()
      .trim()
      .replace(/\W/g, '-')
      .replace(/-+/g, '-');
  }
}
