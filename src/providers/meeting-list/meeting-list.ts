import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeetingListProvider {

  meetings : any;

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrl : string = "https://na-italia.info/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_sub_province,formats&sort_keys=location_sub_province,weekday_tinyint,start_time";

  getMeetings() {
    return this.http.get(this.getApiUrl);
  }

}
