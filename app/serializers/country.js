import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class CountrySerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let countryName = payload[0]['Country'];
    let countryCode = id;
    let mockPayload = payload.map((dataObject, index) => {
      let { Confirmed, Deaths, Recovered, Active, Date } = dataObject;
      return { Confirmed, Deaths, Recovered, Active, Date };
    });

    let EditedPayload = {};
    EditedPayload.data = {
      type: 'country',
      id,
      attributes: {
        countryArray: mockPayload,
        countryName,
        countryCode,
      },
    };
    
    EditedPayload.meta = {};
    return EditedPayload;
  }
}
