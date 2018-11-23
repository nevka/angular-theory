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


  constructor() {}

  addCar() {
    this.carCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarLength(car: string) {
    return car.length > 4 ? true : false;
  }

}
