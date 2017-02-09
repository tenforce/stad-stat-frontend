import Ember from 'ember';

export default Ember.Component.extend({
  topics: [],
  facts: [ "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "bar"],
  actions: {
    changeTopics(newTopics){
      this.set('topics', newTopics);
    }
  }
});
