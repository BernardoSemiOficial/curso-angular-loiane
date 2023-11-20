import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(
    value: string,
    paramA: string,
    paramB: string,
    ...args: unknown[]
  ): unknown {
    console.log('args', paramA, paramB, args);
    const words = value.split(' ');
    const wordsCamelCase = words.map(
      (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
    const content = wordsCamelCase.join(' ');
    return content;
  }
}
