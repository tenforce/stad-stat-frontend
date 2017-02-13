import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  query(store, type, query) {
    var url = this.buildURL(type.modelName, null, null, 'query', undefined);

    if (this.sortQueryParams && Ember.typeOf( query ) != 'string') {
      query = this.sortQueryParams(query);
    }

    return this.ajax(url, 'GET', { data: query });
  }
});
