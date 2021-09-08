import Model, { attr } from '@ember-data/model';

export default class CountryModel extends Model {
  @attr countryArray;
  @attr countryName;
  @attr countryCode;
}
