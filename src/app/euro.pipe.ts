import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro',
  standalone: true
})
export class EuroPipe implements PipeTransform {

/*  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: any, args?: any): any {
    const euro = value + ' €';   (1)
    return euro;         (2)
}
}
