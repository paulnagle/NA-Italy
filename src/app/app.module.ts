import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { ContactModule } from '../pages/contact/contact.module';
import { DatetimeModule } from '../pages/datetime/datetime.module';
import { MeetinglistModule }  from '../pages/meetinglist/meetinglist.module';
import { JustfortodayModule } from '../pages/justfortoday/justfortoday.module';

import { MyApp } from './app.component';
import { JftProvider } from '../providers/jft/jft';
import { AudioProvider } from '../providers/audio/audio';
import { Insomnia } from '@ionic-native/insomnia';

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
    SettingsModule,
    ContactModule,
    DatetimeModule,
    JustfortodayModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JftProvider,
    InAppBrowser,
    AudioProvider,
    Insomnia
    ]
})
export class AppModule {}
