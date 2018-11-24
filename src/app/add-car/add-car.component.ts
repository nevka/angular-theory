import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // carName = '';
  // carYear = 2017;

  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }


  addCar(carNameEl: HTMLInputElement) {
    // this.carEmitter.emit({
    //   name: this.carName,
    //   year: this.carYear
    // });

    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });

    // очистка значений, неэфеективный способ.... {{ ... }}
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
    // this.carYear = 2017;
  }

}
