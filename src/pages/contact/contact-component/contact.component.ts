import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Config } from '../../../app/app.config';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {

  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'no',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };

  email: {subject: string, body: string} = {
    subject: 'Message from NA Ireland App',
    body: ''
  };

  constructor(
  	private config: Config,
    private theInAppBrowser: InAppBrowser
  ) {}



  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }

}
