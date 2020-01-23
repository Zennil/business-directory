import { Direccion } from './direccion';

export class Lugar {
    id: number;
    plan: string;
    cercania: number;
    distancia: number;
    active: boolean;
    nombre: string;
    direccion: Direccion = new Direccion();
    lat: number;
    lng: number;
}
