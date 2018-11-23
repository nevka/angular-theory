import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carCarStatus = false;
  carName = '';

  cars = ['Ford', 'Audi', 'BMV'];

  items = [
      {id: 2, name: 'item 2'},
      {id: 9, name: 'item 9'},
      {id: 1, name: 'item 1'},
  ];

  constructor() {}

  addCar() {
    this.carCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
