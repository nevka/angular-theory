import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // console.log(this.element);
        // this.element.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = 'red';
    }
    @HostListener('mouseleave') mouseLeave() {
        this.background = 'green';
    }
}


// ng g d my-directive --spec=false

