import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

    id: number;
    lugar: Lugar = new Lugar();

    constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
        this.id = this.route.snapshot.params.idLugar;
        this.lugaresService.getLugarById(this.id).subscribe(response => {
            this.lugar = response as Lugar;
        });
    }

    ngOnInit() { }

}
