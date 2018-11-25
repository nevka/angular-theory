import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <input type="text" class="form-control" [(ngModel)]="searchCar" />
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
}

// ng g p my-test
