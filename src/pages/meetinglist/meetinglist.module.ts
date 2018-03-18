import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { MeetinglistComponent } from './meetinglist-component/meetinglist.component';

@NgModule({
  declarations: [
    MeetinglistComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    MeetinglistComponent
  ],
  entryComponents:[
  	MeetinglistComponent
  ]
})
export class MeetinglistModule {}
