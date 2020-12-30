import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/services/config/app.config.service';
import { IPokemon } from './ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemonInfo(pkmName: string): Promise<IPokemon> {
    const link = API_URL + `pokemon/${pkmName}`;

    return new Promise((resolve, reject) => {
      this.http.get(link).subscribe((result: IPokemon) => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }
}
