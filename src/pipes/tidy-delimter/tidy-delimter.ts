import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'tidyDelimter'
})
export class TidyDelimterPipe implements PipeTransform {

  transform(value: string, ...args) {
    return value.replace("#@-@#", " : ");

  }
}
