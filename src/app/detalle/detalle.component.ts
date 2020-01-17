import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

    lugares = [
        { id: 1, plan: 'Free', cercania: 1, distancia: 6, active: false, nombre: 'Floreria la Gardenia', descripcion: 'bjcbdscii ouc' },
        { id: 2, plan: 'Premium', cercania: 3, distancia: 24, active: true, nombre: 'Donas la pasadita', descripcion: 'bjcbsci hcud i db' },
        { id: 3, plan: 'Premium', cercania: 2, distancia: 17, active: false, nombre: 'Veterinaria huellas', descripcion: 'bj dbsscbiusdb' },
        { id: 4, plan: 'Free', cercania: 1, distancia: 9, active: true, nombre: 'Sushi Rol', descripcion: 'bjcbdscii ouc dbshcudscbiusdb' },
        { id: 5, plan: 'Premium', cercania: 2, distancia: 11, active: true, nombre: 'Hotel la Gracia', descripcion: 'bjcbdscii ouciusdb' },
        { id: 6, plan: 'Free', cercania: 2, distancia: 14, active: true, nombre: 'Zapateria el Real', descripcion: 'bjcbdscii ouc dbshb' }
    ];

    id: number;
    lugar: any;

    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.params.idLugar);
        console.log(this.route.snapshot.queryParams.action);
        console.log(this.route.snapshot.queryParams.referer);

        this.id = this.route.snapshot.params.idLugar;
        this.lugar = this.getLugar();
    }

    ngOnInit() { }

    getLugar() {
        return this.lugares.filter((lugar) => lugar.id == this.id)[0] || null;
    }

}
