import { Component }   from '@angular/core';
import { Storage }     from '@ionic/storage';
import   moment        from 'moment';

@Component({
  templateUrl: 'datetime.html'
})

export class DatetimeComponent {

  cleanDate               : any;
  myMomentCleanDate       : any;
  cleanTimeInDays         : any;
  cleanTimeInWeeks        : any;
  cleanTimeInMonths       : any;
  cleanTimeInYears        : any;
  cleanTimeHumanize       : any;

  constructor( private storage     : Storage  ) {
    this.cleanDate = new Date().toISOString();
    this.myMomentCleanDate = moment(this.cleanDate);
  }

  ngOnInit() {
    this.storage.get('cleanDate')
    .then(value => {
        if(value) {
          this.cleanDate = value;
        }
    });
  }

  getCleanTime(){
    this.myMomentCleanDate = moment(this.cleanDate);

    this.cleanTimeInDays   = moment().diff(this.myMomentCleanDate, 'days');
    this.cleanTimeInWeeks  = moment().diff(this.myMomentCleanDate, 'weeks');
    this.cleanTimeInMonths = moment().diff(this.myMomentCleanDate, 'months');
    this.cleanTimeInYears  = moment().diff(this.myMomentCleanDate, 'years');
    this.cleanTimeHumanize = moment().diff(this.myMomentCleanDate);

    this.storage.set('cleanDate', this.cleanDate);

    return this.cleanTimeInDays
  }


}
