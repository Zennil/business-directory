import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

    newLugar: Lugar = new Lugar();

    constructor(private lugaresService: LugaresService) { }

    ngOnInit() {

    }

    saveLugar() {
        console.log(this.newLugar);
        this.lugaresService.saveLugares(this.newLugar);
    }
    
}
