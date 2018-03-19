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
  BresciaList : any;
  CentroSudList : any;
  NordList : any;
  NordOvestList : any;
  ToscanaList : any;
  VenetoList : any;
  EmiliaRomagnaList : any;

  shownBrescia = null;
  shownCentroSud = null;
  shownNord = null;
  shownNordOvest = null;
  shownToscana = null;
  shownVeneto = null;
  shownEmiliaRomagna = null;

  loader = null;

  constructor(private MeetingListProvider : MeetingListProvider,
              public loadingCtrl: LoadingController,
              public plt: Platform) {

    this.loader = this.loadingCtrl.create({
          content: "Caricamento delle riunioni...",
          duration: 10000
        });
    this.loader.present();

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

  toggleBrescia(group) { if (this.isBresciaShown(group)) { this.shownBrescia = null; } else { this.shownBrescia = group;} };
  isBresciaShown(group) { return this.shownBrescia === group; };

  toggleCentroSud(group) { if (this.isCentroSudShown(group)) { this.shownCentroSud = null; } else { this.shownCentroSud = group;} };
  isCentroSudShown(group) { return this.shownCentroSud === group; };

  toggleNord(group) { if (this.isNordShown(group)) { this.shownNord = null; } else { this.shownNord = group;} };
  isNordShown(group) { return this.shownNord === group; };

  toggleNordOvest(group) { if (this.isNordOvestShown(group)) { this.shownNordOvest = null; } else { this.shownNordOvest = group;} };
  isNordOvestShown(group) { return this.shownNordOvest === group; };

  toggleToscana(group) { if (this.isToscanaShown(group)) { this.shownToscana = null; } else { this.shownToscana = group;} };
  isToscanaShown(group) { return this.shownToscana === group; };

  toggleVeneto(group) { if (this.isVenetoShown(group)) { this.shownVeneto = null; } else { this.shownVeneto = group;} };
  isVenetoShown(group) { return this.shownVeneto === group; };

  toggleEmiliaRomagna(group) { if (this.isEmiliaRomagnaShown(group)) { this.shownEmiliaRomagna = null; } else { this.shownEmiliaRomagna = group;} };
  isEmiliaRomagnaShown(group) { return this.shownEmiliaRomagna === group; };

  getAllMeetings(){
    this.MeetingListProvider.getMeetings().subscribe((data)=>{
      this.meetingList       = data;
      this.BresciaList       = this.meetingList.filter(meeting => meeting.service_body_bigint == "2");
      this.CentroSudList     = this.meetingList.filter(meeting => meeting.service_body_bigint == "3");
      this.NordList          = this.meetingList.filter(meeting => meeting.service_body_bigint == "4");
      this.NordOvestList     = this.meetingList.filter(meeting => meeting.service_body_bigint == "5");
      this.ToscanaList       = this.meetingList.filter(meeting => meeting.service_body_bigint == "6");
      this.VenetoList        = this.meetingList.filter(meeting => meeting.service_body_bigint == "7");
      this.EmiliaRomagnaList = this.meetingList.filter(meeting => meeting.service_body_bigint == "8");


      this.loader.dismiss();
    });
  }
}
