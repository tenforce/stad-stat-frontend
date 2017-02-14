import Ember from 'ember';

export default Ember.Controller.extend({
  leftOffset: 0,
  chartSize: 250,
  actions: {
    rightClick: function(){
      var relatedSize = (this.get('model.related.length') ) * (this.get('chartSize'));
      this.set('leftOffset', Math.max(-relatedSize, this.get('leftOffset') - this.get('chartSize')/2));
    },
    leftClick: function(){
      this.set('leftOffset', Math.min(0,this.get('leftOffset') + this.get('chartSize')/2));
    }
  }
});
