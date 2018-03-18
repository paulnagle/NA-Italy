import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JftProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JftProvider Provider');
  }

  getJFTUrl : string = "http://jftna.org/jft/";

  getJFT() {
    return this.http.get(this.getJFTUrl, {responseType: 'text'});
  }

}
