import { Injectable } from '@angular/core';
import { Lugar } from '../models/lugar.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class LugaresService {

    lugares: Lugar[] = [
        { id: 1, plan: 'Free', cercania: 1, distancia: 6, active: false, nombre: 'Floreria la Gardenia' },
        { id: 2, plan: 'Premium', cercania: 3, distancia: 24, active: true, nombre: 'Donas la pasadita' },
        { id: 3, plan: 'Premium', cercania: 2, distancia: 17, active: false, nombre: 'Veterinaria huellas' },
        { id: 4, plan: 'Free', cercania: 1, distancia: 9, active: true, nombre: 'Sushi Rol' },
        { id: 5, plan: 'Premium', cercania: 2, distancia: 11, active: true, nombre: 'Hotel la Gracia' },
        { id: 6, plan: 'Free', cercania: 2, distancia: 14, active: true, nombre: 'Zapateria el Real' }
    ];

    constructor(private afDB: AngularFireDatabase) { }

    getLugares() {
        return this.lugares;
    }

    getLugarById(id: number) {
        return this.lugares.filter((lugar) => lugar.id == id)[0] || null;
    }

    saveLugares(lugar: Lugar) {
        lugar.id = Date.now();
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

}
