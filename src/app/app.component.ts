import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn = false;
  loggedUser: any = null;

  constructor(private authService: AutorizacionService) {
    this.authService.isLogged().subscribe((response: any) => {
      if (response && response.uid) {
        this.loggedIn = true;
        setTimeout(() => {
          this.loggedUser = this.authService.getUser().currentUser.email;
          console.log(this.loggedUser);
        }, 1000);

      } else {
        this.loggedIn = false;
      }
    }, error => this.loggedIn = false);
  }

  cerrarSesion() {
    this.authService.logout();
  }

}
