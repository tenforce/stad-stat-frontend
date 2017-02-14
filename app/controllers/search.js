import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:["topics","regions"],
  topics:[],
  regions:[],
  
  actions: {
      updateSelected(selected){
	  var regions = [];
	  var topics = [];
	  selected.forEach(function(sel)
			   {
			       var internalModel = sel;
			       if(Ember.get(internalModel, '_internalModel') !== undefined)
			       {
				   internalModel = Ember.get(internalModel, '_internalModel');
			       }
			       var type = Ember.get(internalModel, 'modelName');
			       if(type==="region")
			       {
				   regions.pushObject(sel);
			       }
			       else
			       {
				   topics.pushObject(sel);
			       }
			   });
      this.set('topics', topics.mapBy('id'));
      this.set('regions', regions.mapBy('id'));
    }
  }
});
