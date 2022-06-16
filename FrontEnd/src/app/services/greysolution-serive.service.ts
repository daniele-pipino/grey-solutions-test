import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GreysolutionSeriveService {
  constructor(private _http: HttpClient) {}

  url: string = 'https://run.mocky.io/v3/1378e8d1-8273-4b54-9966-3f2b0ee82bae';

  getData() {
    return this._http.get(this.url);
  }
}
