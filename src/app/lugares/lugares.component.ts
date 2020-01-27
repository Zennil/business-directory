import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css'],
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0,
                backgroundColor: 'green',
                transform: 'rotate3d(0,0,0,0deg)'
            })),
            state('final', style({
                opacity: 1,
                backgroundColor: 'yellow',
                transform: 'rotate3d(5,10,20,30deg)'
            })),
            transition('inicial => final', animate(2000)),
            transition('final => inicial', animate(300))
        ]),
        trigger('destacados', [
            state('inicia', style({
                opacity: 0,
                transform: 'translateX(200px)'
            })),
            state('fin', style({
                opacity: 1,
                transform: 'translateX(0px)'
            })),
            transition('inicia => fin', animate(1500)),
            transition('fin => inicia', animate(1500))
        ])
    ]
})
export class LugaresComponent implements OnInit {


    lugares: any = [];
    state = 'inicial';
    stateDestacados = 'inicia';

    errorText: string;

    lat = 20.2666231;
    lng = -98.944817;

    iniciaAnimacion(e) {
        console.log('Iniciando');
        console.log(e);
    }

    terminaAnimacion(e) {
        console.log('Terminado');
        console.log(e);
    }

    constructor(private lugaresService: LugaresService) {
        this.lugaresService.getLugares().subscribe(respuesta => {
            this.lugares = Object.keys(respuesta).map(key => respuesta[key]);
        }, error => {
            console.log(error);
            this.errorText = error.statusText;
        });
    }

    ngOnInit() {
        setTimeout(() => this.stateDestacados = 'fin', 1000);
    }

    animar() {
        this.state = this.state === 'inicial' ? 'final' : 'inicial';
    }
}
