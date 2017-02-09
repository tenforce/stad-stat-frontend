import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:["topics"],
  topics:[],
  
  actions: {
    updateSelected(topics){
      this.set('topics', topics.mapBy('id'))
    }
  }
});
