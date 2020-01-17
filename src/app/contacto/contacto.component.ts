import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    lat = 20.6235518;
    lng = -100.4059456;

    constructor() { }

    ngOnInit() { }
}
