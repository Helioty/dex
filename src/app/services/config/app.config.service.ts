import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const API_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor(private readonly http: HttpClient) {}
}
