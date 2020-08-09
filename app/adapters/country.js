import JSONAPIAdapter from '@ember-data/adapter/json-api';

class CountryAdapter extends JSONAPIAdapter{
	host = 'https://api.covid19api.com';
	namespace='total/dayone';
}

export default CountryAdapter;