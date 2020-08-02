import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CovidRoute extends Route {
  model(){
    return fetch("https://api.covid19api.com/summary").then(response=>response.json());
  }
}
