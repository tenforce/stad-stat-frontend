import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('region-theme', params.id).then(function(regionTheme){
      return Ember.merge(regionTheme, { related: [1,2,3,4,5] });
    });
  }

});
