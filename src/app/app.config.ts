import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://www.na-ireland.org/wp-json';
	// public wordpressApiUrl = 'http://demo.wp-api.org/wp-json'

	public emailTo = 'paulnagle@gmail.com';
}
