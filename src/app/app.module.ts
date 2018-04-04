import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { FullItalyMapModule } from '../pages/fullitalymap/fullitalymap.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { ContactModule } from '../pages/contact/contact.module';
import { DatetimeModule } from '../pages/datetime/datetime.module';
import { MeetinglistModule }  from '../pages/meetinglist/meetinglist.module';
import { JustfortodayModule } from '../pages/justfortoday/justfortoday.module';
import { EventsPageModule } from '../pages/events/events.module'
import { ToastController } from 'ionic-angular';
import { MyApp } from './app.component';
import { JftProvider } from '../providers/jft/jft';
import { EventsProvider} from '../providers/events/events'
import { MeetingListProvider } from '../providers/meeting-list/meeting-list';
import { ServiceGroupsProvider } from '../providers/service-groups/service-groups';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SharedModule,
    HomeModule,
    TabsModule,
    GoogleMapsModule,
    FullItalyMapModule,
    SettingsModule,
    ContactModule,
    DatetimeModule,
    JustfortodayModule,
    EventsPageModule,
    MeetinglistModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JftProvider,
    EventsProvider,
    InAppBrowser,
    Geolocation,
    ToastController,
    MeetingListProvider,
    ServiceGroupsProvider
    ]
})
export class AppModule {}
