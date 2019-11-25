import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getQuote(NumID){
  	return this._http.get(`quoteAPI/${NumID}`)
  } 
}
