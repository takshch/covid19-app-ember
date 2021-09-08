import EmberRouter from '@ember/routing/router';
import config from 'covid19/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

<<<<<<< HEAD
Router.map(function() {
  this.route('covid', { path: '' });
  this.route('country', { path: '/country/:country_code'});
});
=======
Router.map(function () {});
>>>>>>> 9625750... v3.19.0...v3.28.0
