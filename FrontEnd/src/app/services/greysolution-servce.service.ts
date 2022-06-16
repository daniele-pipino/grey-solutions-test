import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GreysolutionServceService {
  constructor(private _http: HttpClient) {}

  url: string = 'https://run.mocky.io/v3/1378e8d1-8273-4b54-9966-3f2b0ee82bae';

  //get
  getData() {
    this._http.get(this.url).subscribe();
  }
}
