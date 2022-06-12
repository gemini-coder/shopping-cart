import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(amount: number): string {
    return `£${amount.toFixed(2)}`;
  }

}
