import Ember from 'ember';

export default Ember.Controller.extend({
  leftOffset: 0,
  chartSize: 500,
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
  init: function(){
    this.set('oldAdditional', this.get('additionalTopics'));
    this._super();
  },
  selectedTopics: [],
  //faking stuff here
  renderedTopics: Ember.computed('selectedTopics.@each.title', 'model.theme.topics', function(){
    var topics = this.get('model.theme.topics');
    var selected = this.get('selectedTopics')
    if(!topics){
      return new Ember.RSVP.Promise(function(resolve){ resolve(selected) });;
    }
    return topics.then(function(result){

      var res = [].addObjects(selected);
      result.map( function(item) {
        res.push(item);
      });
      return res;
    });
  }),

  actions: {
    selectTopic: function(topic){
      this.get('additionalTopics').removeObject(topic);
      this.get('selectedTopics').addObject(topic);
    },
    rightClick: function(){
      var relatedSize = (this.get('model.related.length') - 1) * (this.get('chartSize'));
      this.set('leftOffset', Math.max(-relatedSize, this.get('leftOffset') - this.get('chartSize')/2));
    },
    leftClick: function(){
      this.set('leftOffset', Math.min(0,this.get('leftOffset') + this.get('chartSize')/2));
    }
  }
});
