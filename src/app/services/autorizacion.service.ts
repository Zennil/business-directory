import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AutorizacionService {

    constructor(private authService: AngularFireAuth, private router: Router) { }

    googleLoggin() {
        this.authService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
            console.log(response);
            this.router.navigate(['/lugares']);
            alert('El usuario se ha loggeado con Gmail');
        }).catch(response => {
            console.log(response);
        });
    }

    login = (email: string, password: string) => {
        console.log(email + password);
        this.authService.auth.signInWithEmailAndPassword(email, password).then(response => {
            this.router.navigate(['/lugares']);
            alert('Se ha iniciado sesion');
            console.log(response);
        }).catch(error => {
            alert('Ocurrio un error');
            console.log(error);
        });
    }

    logout() {
        this.authService.auth.signOut();
    }

    registrar = (email: string, password: string) => {
        console.log(email, password);
        this.authService.auth.createUserWithEmailAndPassword(email, password).then(response => {
            this.router.navigate(['/lugares']);
            alert('Usuario creado con exito');
            console.log(response);
        }).catch(error => {
            alert('Ocurrio un error');
            console.log(error);
        });
    }

    isLogged() {
        return this.authService.authState;
    }

}
