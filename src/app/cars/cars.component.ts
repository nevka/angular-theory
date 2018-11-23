import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carCarStatus = false;
  carName = '';

  cars = ['Ford', 'Audi', 'BMV', 'Mazda', 'Lada', 'Bently'];
  dates = [
   /* new Date(2015, 3, 1),
    new Date(1015, 1, 9),
    new Date(2005, 11, 27),
    new Date(1905, 1, 15),
    new Date(1955, 2, 2),*/
    new Date(2015, 3, 1).toDateString(),
    new Date(1015, 1, 9).toDateString(),
    new Date(2005, 11, 27).toDateString(),
    new Date(1905, 1, 15).toDateString(),
    new Date(1955, 2, 2).toDateString()
  ];


  constructor() {}

  addCar() {
    this.carCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
