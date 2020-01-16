import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit {

    @Input('resaltar') plan = '';

    constructor(private elemRef: ElementRef, private rend2: Renderer2) { }

    ngOnInit() {
        if (this.plan === 'Premium') {
            this.rend2.setStyle(this.elemRef.nativeElement, 'background-color', 'yellow');
            this.rend2.setStyle(this.elemRef.nativeElement, 'font-weight', 'bold');
        }
    }

}
