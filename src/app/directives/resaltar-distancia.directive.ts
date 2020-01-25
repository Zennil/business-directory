import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[resaltarDistancia]'
})
export class ResaltarDistanciaDirective implements OnInit {

    @Input('resaltarDistancia') distancia = 0;

    constructor(private elemRef: ElementRef, private rend2: Renderer2) { }

    ngOnInit() {
        if (this.distancia === 1) {
            this.rend2.setStyle(this.elemRef.nativeElement, 'color', 'green');
        } else if (this.distancia === 3) {
            this.rend2.setStyle(this.elemRef.nativeElement, 'color', 'red');
        }
    }

}
