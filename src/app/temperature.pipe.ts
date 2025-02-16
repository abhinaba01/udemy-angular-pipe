import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
 
})
export class TemperaturePipe implements PipeTransform {
  
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
 ) 
  {
    let val: number;
    let outputTemp: number;
    let symbol: '°C' | '°F';

    if (typeof value === 'string') {
      val = parseFloat(value); //used to convert string to number
    }
     else {
      val = value;
    }

   

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = (9 / 5) * val + 32;
      symbol = '°F';
    } 

    else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (5 / 9) * (val - 32);
      symbol = '°C';
     } 

    else {
      outputTemp = val;
      symbol = (inputType === 'cel') ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  
  }

}