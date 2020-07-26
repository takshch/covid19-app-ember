import Route from '@ember/routing/route';

export default class CovidRoute extends Route {
    async model(){
      const resp = await fetch("https://api.covid19api.com/summary");
      return resp.json();
    }
}
