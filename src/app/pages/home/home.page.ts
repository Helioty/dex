import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/api/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private readonly pokeAPI: PokemonService) {}

  ngOnInit(): void {}

  ionViewDidEnter(): void {
    this.pokeAPI
      .getGeracoes(1)
      .pipe(take(1))
      .subscribe({
        next: (gen) => {
          console.log('Gen: ', gen);
        },
      });
  }
}
