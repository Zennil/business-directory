import { Injectable } from '@angular/core';
import { Lugar } from '../models/lugar.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Direccion } from '../models/direccion';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LugaresService {

    constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }

    getLugares() {
        return this.afDB.list('lugares/').valueChanges();
    }

    getLugarById(id: number) {
        return this.afDB.object('lugares/' + id).valueChanges();
    }

    saveLugar(lugar: Lugar) {
        lugar.id = Date.now();
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    editLugar(lugar: Lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    getGeocode(dir: Direccion) {
        const urlGeocode = 'https://maps.google.com/maps/api/geocode/json?address=';
        return this.http.get(urlGeocode + dir.calle + ',' + dir.ciudad + ',' + dir.pais + '&key=' + environment.apiKeyG);
    }
}
