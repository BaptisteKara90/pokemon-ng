import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

const routes: Routes = [
  {path:'', component: GenerationsComponent},
  {path:'pokemon', component: PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
