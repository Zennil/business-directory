import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {


    lugares: any = [];

    errorText: string;

    lat = 20.2666231;
    lng = -98.944817;

    constructor(private lugaresService: LugaresService) {
        this.lugaresService.getLugares().subscribe(respuesta => {
            this.lugares = Object.keys(respuesta).map(key => respuesta[key]);
        }, error => {
            console.log(error);
            this.errorText = error.statusText;
        });
    }

    ngOnInit() { }

}
