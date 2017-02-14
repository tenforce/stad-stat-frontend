import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:["topics","regions"],
  topics:[],
  regions:[],
  
  actions: {
    updateSelected(topics, regions){
      this.set('topics', topics.mapBy('id'));
      this.set('regions', regions.mapBy('id'));
    }
  }
});
