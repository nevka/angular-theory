import { Component } from '@angular/core';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <h1>{{asyncTitle | async}}</h1>
      <input type="text" class="form-control" [(ngModel)]="searchCar" />
        <button class="btn btn-primary" (click)="addCar()">Добавить</button>
      <hr />
      <ul class="list-group">
          <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar:'desc'; let i = index">
              <b>{{ i + 1}}</b> {{ car.name }} <i>{{car.desc}}</i>
          </li>
       </ul>
    </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
      {name: 'Ford', desc: 'a1'},
      {name: 'Mazda', desc: 'a2'},
  ];

  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));

    addCar() {
      this.cars.push({
         name: 'New Car',
         desc: 'a ~'
      });
    }
}

// ng g p my-test
