import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      topics: [ "foo", "bar", "bang"],
      related:[1,2,3,4,5]
    };
  }

});
