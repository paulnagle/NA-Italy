import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeetingListProvider {

  meetings : any;
  italiaBMLT : any = "https://na-italia.info/main_server/client_interface/json/";
  tomatoBMLT : any = "https://tomato.na-bmlt.org/main_server/client_interface/json/";

  constructor(public http: HttpClient) {
  }

  getApiUrl : string = this.italiaBMLT + "?switcher=GetSearchResults&sort_keys=longitude,latitude";

  getAllItalianMeetings() {
    return this.http.get(this.getApiUrl);
  }

  getCircleMeetings(lat, long, radius) {
    var getApiUrlCircleMap : string = this.tomatoBMLT + "?switcher=GetSearchResults&geo_width_km=" + radius + "&long_val=" + long + "&lat_val=" + lat + "&sort_keys=longitude,latitude&callingApp=na-italia.org";

    return this.http.get(getApiUrlCircleMap);
  }

}
