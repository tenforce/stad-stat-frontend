import Ember from 'ember';

export default Ember.Component.extend({
  chartType: "pie",
  actions: {
    makePie: function(){
      if(!this.get('additional') || this.get('additional').length === 0 ){
        this.set('chartType', 'pie');
      }
    },
    makeBar: function(){
      this.set('chartType', 'bar');
    }
  }
}); 
