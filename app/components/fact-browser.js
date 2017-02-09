import Ember from 'ember';

export default Ember.Component.extend({
  facts: [ "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "foo", "bar"],

  actions: {
    clickFact: function() {
      var count = Math.random()*20;
      var facts = [];
      for(var i=0; i<count; i++){
        facts.push("fact"+i);
      }
      this.set('facts', facts);
    }
  }
});
