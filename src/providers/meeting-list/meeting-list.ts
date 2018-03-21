import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeetingListProvider {

  meetings : any;

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrl : string = "https://na-italia.info/main_server/client_interface/json/?switcher=GetSearchResults&sort_keys=longitude,latitude";

  getMeetings() {
    return this.http.get(this.getApiUrl);
  }


}
