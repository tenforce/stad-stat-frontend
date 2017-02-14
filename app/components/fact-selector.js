import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  selectedIds: [],
  currentTopics: Ember.computed('selectedTopicIds','selectedRegionIds', function(){
    const topics = this.get('selectedTopicIds').map(
      (id) => this.get('store').find( 'topic', id )
    );
    const regions = this.get('selectedRegionIds').map(
      (id) => this.get('store').find( 'region', id )
    );
    return [].pushObjects(topics).pushObjects(regions);
  }),
  actions: {
    searchRepo(string) {
      return Ember.RSVP.all( [
        this.get('store').query( 'topic', { filter: string } ),
        this.get('store').query( 'region', { filter: string } )
      ] ).then(
        ([topics,regions]) => {
          return [].pushObjects(topics.content).pushObjects(regions.content);
        }
      );
    }
  }
});
