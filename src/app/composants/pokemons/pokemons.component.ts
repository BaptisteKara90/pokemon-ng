import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-service.service';
import { PokemonResponse } from 'src/app/model/PokemonsResponse';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  public pokemonResponse: Array<PokemonResponse> = [];

  constructor(@Inject(PokemonService) private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((res) => {
      this.pokemonResponse = res;
      console.log(this.pokemonResponse);
    });
  }
}
