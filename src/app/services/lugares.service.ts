import { Injectable } from '@angular/core';
import { Lugar } from '../models/lugar.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Direccion } from '../models/direccion';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LugaresService {

    API_ENDPOINT = 'https://business-directory-6b044.firebaseio.com';

    constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }

    getLugares() {
        return this.http.get(this.API_ENDPOINT + '/.json').pipe(map((response: any) => {
            return response.lugares;
        }));
        // return this.afDB.list('lugares/').valueChanges();
    }

    getLugarById(id: number) {
        return this.afDB.object('lugares/' + id).valueChanges();
    }

    saveLugar(lugar: Lugar) {
        lugar.id = Date.now();
        const httpHeadrs = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: httpHeadrs }).subscribe(response => {
            console.log(response);
        });
        // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    editLugar(lugar: Lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    getGeocode(dir: Direccion) {
        const urlGeocode = 'https://maps.google.com/maps/api/geocode/json?address=';
        return this.http.get(urlGeocode + dir.calle + ',' + dir.ciudad + ',' + dir.pais + '&key=' + environment.apiKeyG);
    }
}
