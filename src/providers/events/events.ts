import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EventsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventsProvider Provider');
  }

  getEventsUrl : string = "https://na-italia.org/eventi/italia";

  getEvents() {
    var events = this.http.get(this.getEventsUrl, {responseType: 'text'});
    return events;
  }

}
