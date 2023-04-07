import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitlecase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split(" ")
    return words.map(word => {
      return word[0].toUpperCase()+word.slice(1);
    }).join(" ")
  }

}
