import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: string[], wordMatch: string): string[] {
    const array = value;
    const wordMatchLocale = wordMatch.toLocaleLowerCase();
    const result = array.filter((item) =>
      item.toLocaleLowerCase().includes(wordMatchLocale)
    );
    return result;
  }
}
