import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  }];

  constructor() {
  }

  updateCarList(car: string, year: number) {
   this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'New name!';
  }

  deleteCar () {
    this.cars.splice(0, 1);
  }

}
