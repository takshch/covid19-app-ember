import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default class CovidRoute extends Route {
  @service store;
  @service fastboot;
  @reads('fastboot.isFastBoot') isFastBoot;

  model() {
    console.log('isFastboot:', this.isFastBoot);
    return this.store.queryRecord('covid', {});
  }
}
