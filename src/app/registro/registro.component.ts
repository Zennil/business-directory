import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import { User } from '../models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  newRegistro: User = new User();

  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() {
  }

  registrarse() {
    this.autorizacionService.registrar(this.newRegistro.email, this.newRegistro.password);
  }
}
