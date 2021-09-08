import Model, { attr } from '@ember-data/model';

export default class CovidModel extends Model {
  @attr Global;
  @attr Countries;
  @attr('Date') Date;
}
