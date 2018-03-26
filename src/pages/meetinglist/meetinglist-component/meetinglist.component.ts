import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MeetingListProvider } from '../../../providers/meeting-list/meeting-list';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-meetinglist',
  templateUrl: 'meetinglist.html'
})
export class MeetinglistComponent {

  meetingList : any;
  meetingsListGroupingOne : string;
  shownGroup = null;
  loader = null;

  constructor(private MeetingListProvider : MeetingListProvider,
              public loadingCtrl: LoadingController,
              public plt: Platform) {

    this.loader = this.loadingCtrl.create({
          content: "Caricamento delle riunioni...",
          duration: 10000
        });
    this.loader.present();

//    this.meetingsListGroupingOne = 'location_sub_province';
//    this.meetingsListGroupingOne = 'weekday_tinyint';
    this.meetingsListGroupingOne = 'service_body_bigint';
    this.getAllMeetings();

  }

  public openMapsLink(destLatitude, destLongitude) {
    // ios
    console.log("In openMapsLink");
    if (this.plt.is('ios')) {
      window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
    };
    // android
    if (this.plt.is('android')) {
      window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
    };
  }

  getAllMeetings(){
    this.MeetingListProvider.getMeetingsSortedByDay().subscribe((data)=>{

      // Get all the meeting list as flat json
      this.meetingList = data;
      this.meetingList  = this.meetingList.filter(meeting => meeting.contact_phone_1 = meeting.contact_phone_1.toString().replace("#@-@#", " : "));
      this.meetingList  = this.meetingList.filter(meeting => meeting.contact_email_1 = meeting.contact_email_1.toString().replace("#@-@#", " : "));

      this.groupMeetings();
      this.loader.dismiss();
    });
  }

  groupMeetings() {
    // A function to convert a flat json list to an javascript array
    var groupJSONList = function(inputArray, key) {
      return inputArray.reduce(function(ouputArray, currentValue) {
        (ouputArray[currentValue[key]] = ouputArray[currentValue[key]] || []).push(currentValue);
        return ouputArray;
      }, {});
    };

    // Convert the flat json to an array grouped by and indexed by the meetingsListGroupingOne field,
    var groupedByGroupingOne = groupJSONList( this.meetingList, this.meetingsListGroupingOne);

    // Make the array a proper javascript array, index by number
    var groupedByGroupingOneAsArray = Object.keys(groupedByGroupingOne).map(function(key) {
      return groupedByGroupingOne[key];
    });

    this.meetingList = groupedByGroupingOneAsArray;
  }

  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };

  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
