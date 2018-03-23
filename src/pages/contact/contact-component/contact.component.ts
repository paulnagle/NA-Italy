import { Component } from '@angular/core';
import { Config } from '../../../app/app.config';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {

  constructor(
  	private config: Config
  ) {}



}
