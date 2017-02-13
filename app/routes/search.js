import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    topics: {
      refreshModel: true
    }
  },
  model(params) {
    if( params.topics && params.topics.length ){
      const joinedTopics = params.topics.map(
        (topicId) => "filter[topics][id]=" + encodeURIComponent( topicId )
      ).join('&');
      return this.get('store').query( 'value', joinedTopics );
    } else {
      return this.get('store').findAll( 'value' );
    }
  }
});