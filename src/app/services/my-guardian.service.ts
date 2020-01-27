import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AutorizacionService } from './autorizacion.service';

@Injectable({
    providedIn: 'root'
})
export class MyGuardian implements CanActivate {

    loggedIn = false;

    constructor(private authService: AutorizacionService) {
        this.authService.isLogged().subscribe((response: any) => {
            if (response && response.uid) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }, error => this.loggedIn = false);
    }

    canActivate() {
        return this.loggedIn;
    }

}
