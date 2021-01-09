import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mojePipa'})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string, newEnd: string): string {
    let dunno = value;
    dunno = dunno.substring(2, newEnd.length);
    dunno = dunno + newEnd;
    return dunno;}
}
