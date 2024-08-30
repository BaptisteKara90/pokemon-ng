import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-service.service';
import { PokemonResponse, PokemonResults } from 'src/app/model/PokemonsResponse';
import { Pokemon } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  public pokemonResult: Array<PokemonResults> = [];
  public pokemons: Array<Pokemon> = [];
  public pokemon!:Pokemon

  constructor(@Inject(PokemonService) private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((res: PokemonResponse) => {
      this.pokemonResult = res.results;
      for(let pokemonResult of this.pokemonResult){
        this.pokemonService.getPokemonsDetail(pokemonResult.url).subscribe(res=>{
          this.pokemon.name = res.name
          this.pokemon.id = res.id
          
        })
      }
    })
  }
}


