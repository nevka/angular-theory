import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  //templateUrl: './car.component.html',
  template: `      
    <h2>Single Car</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quasi.</p>
  `,
  //styleUrls: ['./car.component.css']
  styles: [`
    h2{
        color: darkblue;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
