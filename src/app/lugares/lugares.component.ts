import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {


    lugares: any = [
        { id: 1, plan: 'Free', cercania: 1, distancia: 6, active: false, nombre: 'Floreria la Gardenia' },
        { id: 2, plan: 'Premium', cercania: 3, distancia: 24, active: true, nombre: 'Donas la pasadita' },
        { id: 3, plan: 'Premium', cercania: 2, distancia: 17, active: false, nombre: 'Veterinaria huellas' },
        { id: 4, plan: 'Free', cercania: 1, distancia: 9, active: true, nombre: 'Sushi Rol' },
        { id: 5, plan: 'Premium', cercania: 2, distancia: 11, active: true, nombre: 'Hotel la Gracia' },
        { id: 6, plan: 'Free', cercania: 2, distancia: 14, active: true, nombre: 'Zapateria el Real' }
    ];

    lat = 10.6235518;
    lng = -100.4059456;

    constructor() { }

    ngOnInit() { }
}
