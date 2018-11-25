import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: any, searchString: string, fieldName: string)  {
    if (carList.length === 0 || searchString === '') {
      return carList;
    }

    // return carList.filter((car) => car.name === searchString);
    return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchString.toLowerCase()) === -1);
  }

}
