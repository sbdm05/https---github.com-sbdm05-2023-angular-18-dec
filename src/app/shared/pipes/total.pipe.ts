import { Pipe, PipeTransform } from '@angular/core';

// decorateur
@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, tva?: number): number {
    //console.log('déclenché depuis Pipe Total'); // combien de fois

    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }
}

// arg| total
