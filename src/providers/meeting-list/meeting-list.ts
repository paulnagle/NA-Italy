import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeetingListProvider {

  meetings : any;
  whichBMLT : any = "https://na-italia.info/main_server/client_interface/json/";
//  whichBMLT : any = "https://na-bmlt.org/_/sandwich/client_interface/json";

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrlMap : string = this.whichBMLT + "?switcher=GetSearchResults&sort_keys=longitude,latitude";
  getApiUrlDay : string = this.whichBMLT + "?switcher=GetSearchResults&sort_keys=weekday_tinyint";

  getMeetings() {
    return this.http.get(this.getApiUrlMap);
  }

  getCircleMeetings(lat, long, radius) {
    var getApiUrlCircleMap : string = this.whichBMLT + "?switcher=GetSearchResults&geo_width_km=" + radius + "&long_val=" + long + "&lat_val=" + lat + "&sort_keys=longitude,latitude";

    return this.http.get(getApiUrlCircleMap);
  }

  getMeetingsSortedByDay() {
    return this.http.get(this.getApiUrlDay);

  }

}
