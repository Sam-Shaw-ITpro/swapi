import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetitService {
  private _dbUrl = "https://swapi.co/api/"
  constructor(private httpClient: HttpClient) { }

  // getSearch(dropdown, newSearch) : void {
  //   this.httpClient.get<any>(`${this._dbUrl}people/1/?format=json`);
  //    };

  // getSearch(dropdown, newSearch) : Observable<any> {
  //   return this.httpClient.get<any>(`${this._dbUrl}people/1/?format=json`);
  //    };

  getSearch(dropdown, newSearch) : Observable<any> {
    return this.httpClient.get<any>(`${this._dbUrl}${dropdown}/?search=${newSearch}`);
     };
}



