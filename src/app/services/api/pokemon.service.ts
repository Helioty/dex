import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/services/config/app.config.service';
import { BaseService } from '../http/base.service';
import { IGeracao, IPokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly http: BaseService) {}

  getPokemonInfo(pkmName: string): Observable<IPokemon> {
    const url = `${API_URL}pokemon/${pkmName}`;
    return this.http.get(url);
  }

  getGeracoes(id: number = null): Observable<IGeracao> {
    const url = `${API_URL}generation/${id ? id : ''}`;
    return this.http.get(url);
  }
}
