import { Component } from '@angular/core';

@Component({
  //selector: 'app-car',
  //selector: '[appCar]',
  selector: '.appCar', // id использовать нельзя
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2015;

  getName () {
    return this.carName;
  }
}
