import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Pokemon } from '../model/Pokemon';
import { PokemonResponse } from '../model/PokemonsResponse';
import { PokemonResults } from '../model/PokemonsResponse';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _base_url: string = 'https://pokeapi.co/api/v2/'

  constructor(@Inject(HttpClient) private _httpClient: HttpClient) {
  }

  public getPokemons(): Observable<PokemonResponse>{
    return this._httpClient.get<PokemonResponse>(this._base_url + 'pokemon')
  }

  public getPokemonsDetail(url:string): Observable<Pokemon[]>{
    return this._httpClient.get<Pokemon[]>(url)
  }
}
