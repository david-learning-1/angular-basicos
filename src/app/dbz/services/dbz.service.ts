import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 12000
        }
    ]

    get personajes(): Personaje[] {
        // Se hace esto como buena practica ya que se devuelve un nuevo arreglo usando el operador Spread
        return [... this._personajes];
    }
    constructor() {}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}
