import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

    idLugar: any;

    newLugar: Lugar = new Lugar();

    constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {

        this.idLugar = this.route.snapshot.params.idLugar;

        if (this.idLugar !== 'new') {
            this.lugaresService.getLugarById(this.idLugar).subscribe(response => {
                this.newLugar = response as Lugar;
                console.log(response);
            });
        }

    }

    ngOnInit() { }

    saveLugar() {
        this.lugaresService.getGeocode(this.newLugar.direccion).subscribe((response: any) => {

            this.newLugar.lat = response.results[0].geometry.location.lat;
            this.newLugar.lng = response.results[0].geometry.location.lng;

            if (this.idLugar !== 'new') {
                this.lugaresService.editLugar(this.newLugar);
                alert('Se editó el negocio exitosamente.');
            } else {
                this.lugaresService.saveLugar(this.newLugar);
                alert('Se guardó el negocio exitosamente.');
            }

            this.newLugar = new Lugar();
        });
    }

}
