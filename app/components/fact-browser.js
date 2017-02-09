import Ember from 'ember';
import Topic from '../models/topic';

export default Ember.Component.extend({
  topics: null,
  store: Ember.inject.service(),

  init: function() {
    this._super();
    this.generateTopics();
  },

  generateTopics: function(){
    var count = Math.random()*20;
    var topics = [];
    for(var i=0; i<count; i++){
      topics.push(this.get('store').createRecord("topic",{title:"topic"+i}));
    }
    this.set('topics', this.shuffleArray(topics));
  },

  // copied from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray: function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },
  actions: {
    clickTopic() {
      this.generateTopics();
    },
    changeTopics(newTopics){
      this.set('topics', newTopics);
    }
  }
});
