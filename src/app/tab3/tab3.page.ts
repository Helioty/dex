import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/api/pokemon.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private pokemonService: PokemonService
  ) { }

  ionViewWillEnter() { }

  ionViewDidEnter() {
    this.pokemonService.getPokemonInfo('pikachu').then(result => {
      console.log(result);
    });
  }

  ionViewWillLeave() { }

  ionViewDidLeave() { }

}
