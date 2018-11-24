import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
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

}
