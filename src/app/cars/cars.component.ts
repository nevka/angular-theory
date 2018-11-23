import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';

  inputText = '';


  constructor() {}

  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }
  /*onKeuUp(event: Event) {
    //console.log(event);
    this.inputText = (<HTMLInputElement>event.target).value;
  }*/
  /*onKeuUp(value) {
    this.inputText = value;
  }*/
  onKeuUp(event) {
    /*if (event.code === 'Enter') {
        this.inputText = event.target.value;
    }*/

    this.inputText = event.target.value;
  }


}
