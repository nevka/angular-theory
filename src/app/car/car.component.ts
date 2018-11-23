import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-car',
  //selector: '[appCar]',
  selector: '.appCar', // id использовать нельзя
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
