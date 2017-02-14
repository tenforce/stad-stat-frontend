import Ember from 'ember';

export default Ember.Route.extend({
  randomNumbers: function(n, base, tuples){
    var a = [];
    while(n>0){
      n--;
      if(tuples){
        a.push([""+n,Math.random()*(base || 10)]);
      }else{
        a.push(Math.random()*(base || 10));
      }
    }
    return a;
  },
  model(params) {
    var self = this;
    return this.get('store').find('region-theme', params.id).then(function(regionTheme){
      return Ember.merge(regionTheme, { related: [
        [{
          name: 'Woning oppervlakte',
          type: 'bar',
          data: self.randomNumbers(4, 100)
        }],
        [{
          name: 'Opleidingsniveau',
          type: 'pie',
          data: self.randomNumbers(4, 60000, true)
        }],
        [{
          name: 'Percentage autogebruik',
          data: self.randomNumbers(12, 100)
        }],
        [{
          name: 'Levenskwaliteit',
          type: 'bar',
          data: self.randomNumbers(5, 60000)
        }],
        [{
          name: 'Verkeersongevallen',
          type: 'bar',
          data: self.randomNumbers(3, 100)
        }],
        [{
          name: 'Culturele activiteit',
          type: 'pie',
          data: self.randomNumbers(3, 100, true)
        }],
        [{
          name: 'Kinderen',
          type: 'bar',
          data: self.randomNumbers(4, 100)
        }],
        [{
          name: 'Huisdieren',
          type: 'bar',
          data: self.randomNumbers(2, 100)
        }]
      ] });
    });
  }

});
