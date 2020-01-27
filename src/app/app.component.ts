import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'business-directory';

  loggedIn = false;

  constructor(private authService: AutorizacionService) {
    this.authService.isLogged().subscribe((response: any) => {
      console.log(response);
      if (response && response.uid) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }, error => this.loggedIn = false);
  }

  cerrarSesion() {
    this.authService.logout();
  }

}
