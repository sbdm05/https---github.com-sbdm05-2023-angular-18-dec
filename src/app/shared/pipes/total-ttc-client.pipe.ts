import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalTtcClient',
})
export class TotalTtcClientPipe implements PipeTransform {
  transform(val: number, tva: number): unknown {
    return val * (1 + tva/100)
  }
}
