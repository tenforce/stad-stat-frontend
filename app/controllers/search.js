import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:["topics","regions"],
  topics:[],
  regions:[],
  
  actions: {
    updateSelected(topics){
      this.set('topics', topics.mapBy('id'))
    }
  }
});
