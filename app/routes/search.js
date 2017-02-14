import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    topics: {
      refreshModel: true
    },
    regions: {
      refreshModel: true
    }
  },
  model(params) {
    const hasTopics = params.topics && params.topics.length;
    const hasRegions = params.regions && params.regions.length;
    if( hasTopics || hasRegions ){
      let paramString = "";
      if( hasTopics ){
        paramString += params.topics.map(
          (topicId) => "filter[theme][topics][id]=" + encodeURIComponent( topicId )
        ).join('&');
      }
      if( hasRegions ){
        const joinedLocations = params.regions.join(",");
        if( paramString.length ){ paramString += "&"; }
        paramString+=`&filter[region][id]=${joinedLocations}`;
      }
      return this.get('store').query( 'region-theme', paramString );
    } else {
      return this.get('store').findAll( 'region-theme' );
    }
  }
});
