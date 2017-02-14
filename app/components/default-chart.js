import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  chartType: 'pie',
  classNames: ['pie-chart chart'],
  legend: true,

  additionalObserver: Ember.observer('additional.@each.title', function(){
    var additional = this.get('additional');
    if(additional && additional.length > 0){
      this.set('chartType', 'bar');
    }
  }).on('init'),

  title: "Test pie chart",
  chartOptions: Ember.computed('regionTheme.title','legend', function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      yAxis: {
        title: {
          text: false
        }
      },
      legend: {
        enabled: this.get('legend')
      },
      title: {
        text: this.get('regionTheme.title') || this.get('chartData')[0].name || this.get('title')
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      }
    };
  }),
  chartData: Ember.computed('regionTheme.values.@each.value', 'regionTheme.values.@each.year', 'regionTheme.title', 'additional.@each.title', 'chartType', function() {
    var data = null;
    if( this.get('regionTheme') && this.get('regionTheme.values') ){
      data = [{
        type: this.get('chartType'),
        animation: true,
        name: this.get('regionTheme.title'),
        data: this.get('regionTheme.values').map(
          (value) => [value.get('year'), value.get('value')]
        )
      }];
    } else {
      data = [{
        type: this.get('chartType'),
        animation: true,
        name: this.get('title'),
        data: [["≤4", 1], ["5-13", 2], ["14-17", 3], ["18-24", 4], ["25-44", 5], ["45-64", 6], ["≥65", 7]]
      }];
    }
    var additional = this.get('additional');
    var self = this;
    if(additional){
      additional.map(function(item) {
        data.push({
          name: Ember.get(item, 'title'),
          data: self.randomNumbers(4, 75)
        });
      });
    }
    return data;
  }),
  randomNumbers: function(n, base){
    var a = [];
    while(n>0){
      n--;
      a.push(Math.random()*(base || 10));
    }
    return a;
  },
  computedChartData: Ember.computed(function() {
    return [
      {
        type: this.get('chartType'),
        name: this.get('title'),
        data: this.get('chartData')
      }
    ];
  })

});
