import {
    Component,
    ContentChild,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

 @Input('carItem') car: {name: string, year: number};
 @Input('name') name: string;
 @ContentChild('carHeading') carHeading: ElementRef;

 constructor() {
    console.log('constructor');
 }

 ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
 }

 ngOnInit() {
    console.log('ngOnInit');
 }

 ngDoCheck() {
     // часто вызывается, лучше не вешать тяжелую логику
     console.log('ngDoCheck');
 }

 ngAfterContentInit() {
     console.log('ngAfterContentInit');
 }

 ngAfterContentChecked() {
     console.log('ngAfterContentChecked');
 }

 ngAfterViewInit() {
     console.log('ngAfterViewInit');
 }

 ngAfterViewChecked() {
     console.log('ngAfterViewChecked');
 }

 ngOnDestroy() {
     // обычно удаляют слушателей
     console.log('ngOnDestroy');
 }



}
