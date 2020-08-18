import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class CovidSerializer extends JSONAPISerializer {
    keyForAttribute(attr) {
        return attr;
    }

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        // console.log(payload);

        payload.data = {
            type: "covid",
            id: "covid",
            attributes: { ...payload }
        };

        payload.meta = null;    
          
        delete payload.Countries;
        delete payload.Global;
        delete payload.Date;

        // console.log(payload);
        return super.normalizeResponse(...arguments);
    }
}