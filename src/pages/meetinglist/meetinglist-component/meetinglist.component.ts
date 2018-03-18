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
  AntrimList : any;
  ArmaghList : any;
  CarlowList : any;
  CavanList : any;
  ClareList : any;
  CorkList : any;
  DerryList : any;
  DonegalList : any;
  DownList : any;
  DublinList : any;
  FermanaghList : any;
  GalwayList : any;
  KerryList : any;
  KildareList : any;
  KilkennyList : any;
  LaoisList : any;
  LeitrimList : any;
  LimerickList : any;
  LongfordList : any;
  LouthList : any;
  MayoList : any;
  MeathList : any;
  MonaghanList : any;
  OffalyList : any;
  RoscommonList : any;
  SligoList : any;
  TipperaryList : any;
  TyroneList : any;
  WaterfordList : any;
  WestmeathList : any;
  WexfordList : any;
  WicklowList : any;

  shownAntrim = null;
  shownArmagh = null;
  shownCarlow = null;
  shownCavan = null;
  shownClare = null;
  shownCork = null;
  shownDerry = null;
  shownDonegal = null;
  shownDown = null;
  shownDublin = null;
  shownFermanagh = null;
  shownGalway = null;
  shownKerry = null;
  shownKildare = null;
  shownKilkenny = null;
  shownLaois = null;
  shownLeitrim = null;
  shownLimerick = null;
  shownLongford = null;
  shownLouth = null;
  shownMayo = null;
  shownMeath = null;
  shownMonaghan = null;
  shownOffaly = null;
  shownRoscommon = null;
  shownSligo = null;
  shownTipperary = null;
  shownTyrone = null;
  shownWaterford = null;
  shownWestmeath = null;
  shownWexford = null;
  shownWicklow = null;

  loader = null;

  constructor(private MeetingListProvider : MeetingListProvider,
              public loadingCtrl: LoadingController,
              public plt: Platform) {

    this.loader = this.loadingCtrl.create({
          content: "Loading Meeting List...",
          duration: 10000
        });
    this.loader.present();

    this.getAllMeetings();
    
  }

  public openMapsLink(destLatitude, destLongitude) {
    // ios
    if (this.plt.is('ios')) {
      window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
    };
    // android
    if (this.plt.is('android')) {
      window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
    };
  }

  toggleAntrim(group) { if (this.isAntrimShown(group)) { this.shownAntrim = null; } else { this.shownAntrim = group;} };
  isAntrimShown(group) { return this.shownAntrim === group; };

  toggleArmagh(group) { if (this.isArmaghShown(group)) { this.shownArmagh = null; } else { this.shownArmagh = group;} };
  isArmaghShown(group) { return this.shownArmagh === group; };

  toggleCarlow(group) { if (this.isCarlowShown(group)) { this.shownCarlow = null; } else { this.shownCarlow = group;} };
  isCarlowShown(group) { return this.shownCarlow === group; };

  toggleCavan(group) { if (this.isCavanShown(group)) { this.shownCavan = null; } else { this.shownCavan = group;} };
  isCavanShown(group) { return this.shownCavan === group; };

  toggleClare(group) { if (this.isClareShown(group)) { this.shownClare = null; } else { this.shownClare = group;} };
  isClareShown(group) { return this.shownClare === group; };

  toggleCork(group) { if (this.isCorkShown(group)) { this.shownCork = null; } else { this.shownCork = group;} };
  isCorkShown(group) { return this.shownCork === group; };

  toggleDerry(group) { if (this.isDerryShown(group)) { this.shownDerry = null; } else { this.shownDerry = group;} };
  isDerryShown(group) { return this.shownDerry === group; };

  toggleDonegal(group) { if (this.isDonegalShown(group)) { this.shownDonegal = null; } else { this.shownDonegal = group;} };
  isDonegalShown(group) { return this.shownDonegal === group; };

  toggleDown(group) { if (this.isDownShown(group)) { this.shownDown = null; } else { this.shownDown = group;} };
  isDownShown(group) { return this.shownDown === group; };

  toggleDublin(group) { if (this.isDublinShown(group)) { this.shownDublin = null; } else { this.shownDublin = group;} };
  isDublinShown(group) { return this.shownDublin === group; };

  toggleFermanagh(group) { if (this.isFermanaghShown(group)) { this.shownFermanagh = null; } else { this.shownFermanagh = group;} };
  isFermanaghShown(group) { return this.shownFermanagh === group; };

  toggleGalway(group) { if (this.isGalwayShown(group)) { this.shownGalway = null; } else { this.shownGalway = group;} };
  isGalwayShown(group) { return this.shownGalway === group; };

  toggleKerry(group) { if (this.isKerryShown(group)) { this.shownKerry = null; } else { this.shownKerry = group;} };
  isKerryShown(group) { return this.shownKerry === group; };

  toggleKildare(group) { if (this.isKildareShown(group)) { this.shownKildare = null; } else { this.shownKildare = group;} };
  isKildareShown(group) { return this.shownKildare === group; };

  toggleKilkenny(group) { if (this.isKilkennyShown(group)) { this.shownKilkenny = null; } else { this.shownKilkenny = group;} };
  isKilkennyShown(group) { return this.shownKilkenny === group; };

  toggleLaois(group) { if (this.isLaoisShown(group)) { this.shownLaois = null; } else { this.shownLaois = group;} };
  isLaoisShown(group) { return this.shownLaois === group; };

  toggleLeitrim(group) { if (this.isLeitrimShown(group)) { this.shownLeitrim = null; } else { this.shownLeitrim = group;} };
  isLeitrimShown(group) { return this.shownLeitrim === group; };

  toggleLimerick(group) { if (this.isLimerickShown(group)) { this.shownLimerick = null; } else { this.shownLimerick = group;} };
  isLimerickShown(group) { return this.shownLimerick === group; };

  toggleLongford(group) { if (this.isLongfordShown(group)) { this.shownLongford = null; } else { this.shownLongford = group;} };
  isLongfordShown(group) { return this.shownLongford === group; };

  toggleLouth(group) { if (this.isLouthShown(group)) { this.shownLouth = null; } else { this.shownLouth = group;} };
  isLouthShown(group) { return this.shownLouth === group; };

  toggleMayo(group) { if (this.isMayoShown(group)) { this.shownMayo = null; } else { this.shownMayo = group;} };
  isMayoShown(group) { return this.shownMayo === group; };

  toggleMeath(group) { if (this.isMeathShown(group)) { this.shownMeath = null; } else { this.shownMeath = group;} };
  isMeathShown(group) { return this.shownMeath === group; };

  toggleMonaghan(group) { if (this.isMonaghanShown(group)) { this.shownMonaghan = null; } else { this.shownMonaghan = group;} };
  isMonaghanShown(group) { return this.shownMonaghan === group; };

  toggleOffaly(group) { if (this.isOffalyShown(group)) { this.shownOffaly = null; } else { this.shownOffaly = group;} };
  isOffalyShown(group) { return this.shownOffaly === group; };

  toggleRoscommon(group) { if (this.isRoscommonShown(group)) { this.shownRoscommon = null; } else { this.shownRoscommon = group;} };
  isRoscommonShown(group) { return this.shownRoscommon === group; };

  toggleSligo(group) { if (this.isSligoShown(group)) { this.shownSligo = null; } else { this.shownSligo = group;} };
  isSligoShown(group) { return this.shownSligo === group; };

  toggleTipperary(group) { if (this.isTipperaryShown(group)) { this.shownTipperary = null; } else { this.shownTipperary = group;} };
  isTipperaryShown(group) { return this.shownTipperary === group; };

  toggleTyrone(group) { if (this.isTyroneShown(group)) { this.shownTyrone = null; } else { this.shownTyrone = group;} };
  isTyroneShown(group) { return this.shownTyrone === group; };

  toggleWaterford(group) { if (this.isWaterfordShown(group)) { this.shownWaterford = null; } else { this.shownWaterford = group;} };
  isWaterfordShown(group) { return this.shownWaterford === group; };

  toggleWestmeath(group) { if (this.isWestmeathShown(group)) { this.shownWestmeath = null; } else { this.shownWestmeath = group;} };
  isWestmeathShown(group) { return this.shownWestmeath === group; };

  toggleWexford(group) { if (this.isWexfordShown(group)) { this.shownWexford = null; } else { this.shownWexford = group;} };
  isWexfordShown(group) { return this.shownWexford === group; };

  toggleWicklow(group) { if (this.isWicklowShown(group)) { this.shownWicklow = null; } else { this.shownWicklow = group;} };
  isWicklowShown(group) { return this.shownWicklow === group; };

  getAllMeetings(){
    this.MeetingListProvider.getMeetings().subscribe((data)=>{
      this.meetingList   = data;
      this.AntrimList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Antrim");
      this.ArmaghList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Armagh");
      this.CarlowList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Carlow");
      this.CavanList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Cavan");
      this.ClareList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Clare");
      this.CorkList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Cork");
      this.DerryList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Derry");
      this.DonegalList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Donegal");
      this.DownList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Down");
      this.DublinList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Dublin");
      this.FermanaghList = this.meetingList.filter(meeting => meeting.location_sub_province == "Fermanagh");
      this.GalwayList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Galway");
      this.KerryList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Kerry");
      this.KildareList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Kildare");
      this.KilkennyList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Kilkenny");
      this.LaoisList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Laois");
      this.LeitrimList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Leitrim");
      this.LimerickList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Limerick");
      this.LongfordList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Longford");
      this.LouthList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Louth");
      this.MayoList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Mayo");
      this.MeathList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Meath");
      this.MonaghanList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Monaghan");
      this.OffalyList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Offaly");
      this.RoscommonList = this.meetingList.filter(meeting => meeting.location_sub_province == "Roscommon");
      this.SligoList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Sligo");
      this.TipperaryList = this.meetingList.filter(meeting => meeting.location_sub_province == "Tipperary");
      this.TyroneList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Tyrone");
      this.WaterfordList = this.meetingList.filter(meeting => meeting.location_sub_province == "Waterford");
      this.WestmeathList = this.meetingList.filter(meeting => meeting.location_sub_province == "Westmeath");
      this.WexfordList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Wexford");
      this.WicklowList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Wicklow");

      this.loader.dismiss();
    });
  }
}
