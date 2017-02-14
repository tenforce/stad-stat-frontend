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
			       var type = Ember.get(sel, 'modelName');
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
