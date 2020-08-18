import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import fetch from 'fetch';

export default class CovidRoute extends Route {
  @service store;
  @service fastboot;
  @reads('fastboot.isFastBoot') isFastBoot;

  model(){
  	console.log("isFastboot:" ,this.isFastBoot);
    return this.store.queryRecord('covid', {});
  }
}
