import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {


    private lugares: any = [];

    lat = 10.6235518;
    lng = -100.4059456;

    constructor(private lugaresService: LugaresService) {
        this.lugares = lugaresService.getLugares();
    }

    ngOnInit() { }
}
