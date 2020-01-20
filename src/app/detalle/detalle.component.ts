import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

    id: number;
    lugar: any = {};

    constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
        this.id = this.route.snapshot.params.idLugar;
        this.lugar = this.lugaresService.getLugarById(this.id);
    }

    ngOnInit() { }

}
