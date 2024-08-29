import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Pokemons } from '../model/Pokemon';
import { PokemonResponse } from '../model/PokemonsResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _base_url: string = 'https://pokeapi.co/api/v2/'

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  public getPokemons(): Observable<PokemonResponse[]>{
    return this.http.get<PokemonResponse[]>(this._base_url + 'pokemon')
  }
}
