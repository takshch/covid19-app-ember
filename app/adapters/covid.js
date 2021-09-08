import ApplicationAdapter from '../adapters/application';

export default class CovidAdapter extends ApplicationAdapter {
  namespace = 'summary';

  pathForType() {
    return '';
  }
}
