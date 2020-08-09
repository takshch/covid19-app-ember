import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class CovidAdapter extends JSONAPIAdapter {
  host = 'https://api.covid19api.com';

  buildURL(...args){
    return `https://api.covid19api.com/summary`;
  }
}