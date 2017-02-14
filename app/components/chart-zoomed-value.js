import Ember from 'ember';

export default Ember.Component.extend({
  chartType: "pie",
  additionalTopics: [ 
    {
      title: "Verdeling inkomen"
    },
    {
      title: "Oppervlakte woningen"
    },
    {
      title: "Levenskwaliteit"
    },
    {
      title: "Leeftijd"
    },
    {
      title: "Opleidingsniveau"
    }    
  ],
  actions: {
    makePie: function(){
      this.set('chartType', 'pie');
    },
    makeBar: function(){
      this.set('chartType', 'bar');
    }
  }
}); 
