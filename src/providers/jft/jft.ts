import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class JftProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JftProvider Provider');
  }

  getJFTUrl : string = "https://na-italia.org/solo-per-oggi";

  getJFT() {
    var JFT = this.http.get(this.getJFTUrl, {responseType: 'text'});



    return JFT;
  }

}
