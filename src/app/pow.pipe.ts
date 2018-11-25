import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appPow'
})

export class PowPipe implements PipeTransform {

    transform(value: any, popNumber: number = 1, symbol: string) {
        return symbol + ' ' + Math.pow(value, popNumber);
    }

}