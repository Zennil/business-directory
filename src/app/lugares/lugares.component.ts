import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {


    private lugares: any = [];

    lat = 20.2666231;
    lng = -98.944817;

    constructor(private lugaresService: LugaresService) {
        this.lugaresService.getLugares().subscribe(respuesta => {
            // this.lugares = respuesta as Lugar[];
            this.lugares = Object.keys(respuesta).map(key => respuesta[key]);
        });
    }

    ngOnInit() { }
    
}
