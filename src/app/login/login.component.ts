import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: User = new User();

  constructor(private autorizacionService: AutorizacionService) { }

  ngOnInit() { }

  logWithGoogle() {
    this.autorizacionService.googleLoggin();
  }

  loggear() {
    this.autorizacionService.login(this.usuario.email, this.usuario.password);
  }

}
