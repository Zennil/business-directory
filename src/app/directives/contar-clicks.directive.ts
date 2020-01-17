import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'a[contar-clicks]'
})
export class ContarClicksDirective {

    clickN = 1;

    @HostBinding('style.opacity') opacity = .1;

    @HostListener('click', ['$event.target']) onClick(btn: ElementRef) {
        console.log('Numero de clicks: ', this.clickN++, btn);
        this.opacity += .1;
    }

}
