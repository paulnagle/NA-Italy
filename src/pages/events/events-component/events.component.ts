import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { App, NavController } from 'ionic-angular';
import { EventsProvider } from "../../../providers/events/events";
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})

export class EventsComponent {

   events : string;
   loader = null;

  constructor(private EventsProvider : EventsProvider , public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
          content: "Caricamento eventi...",
          duration: 10000
        });
    this.loader.present();
    this.getEvents();

  }

  getEvents(){
    this.EventsProvider
      .getEvents()
      .subscribe((data)=>{

          this.loader.dismiss();
          var elem = document.createElement('div');

          elem.innerHTML = data;

          var a = elem.getElementsByTagName("A");
          for(var i=0;i<a.length;i++)
              a[i].removeAttribute("href");

          var tmp = elem.getElementsByClassName("view-content");

          this.events= tmp[0].innerHTML;
        }
    );

  }

}
