import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  selectedIds: [],
  currentTopics: Ember.computed('selectedIds', function(){
    return this.get('selectedIds').map(
      (id) => this.get('store').find( 'topic', id )
    );
  }),
  actions: {
    searchRepo(string) {
      return this.get('store').query( 'topic', { filter: string } );
    }
  }
});
