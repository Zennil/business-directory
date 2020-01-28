import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugar } from '../models/lugar.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

    idLugar: any;

    newLugar: Lugar = new Lugar();

    results$: Observable<any>;
    searchField: FormControl;


    constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: HttpClient) {

        this.idLugar = this.route.snapshot.params.idLugar;
        if (this.idLugar !== 'new') {
            this.lugaresService.getLugarById(this.idLugar).subscribe(response => {
                this.newLugar = response as Lugar;
            });
        }

        const URL = 'https://maps.google.com/maps/api/geocode/json?&key=' + environment.apiKeyG;
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges.pipe(
            debounceTime(800),
            switchMap(query => {
                if (query) {
                    return this.http.get(URL + '&address=' + query);
                } else {
                    return [];
                }
            }),
            map((respons: any) => respons.results));

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

    fillDirection(direccion: any) {
        console.log(direccion);
        this.newLugar.direccion.calle = direccion[1].long_name + direccion[0].long_name;
        this.newLugar.direccion.ciudad = direccion[4].long_name;
        this.newLugar.direccion.pais = direccion[5].long_name;
        this.searchField.reset();
    }

}
