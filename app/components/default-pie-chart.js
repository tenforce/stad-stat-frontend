import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['pie-chart chart'],

  title: "Test pie chart",
  chartOptions: Ember.computed('regionTheme.title', function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: this.get('regionTheme.title')
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      }
    };
  }),
  chartData: Ember.computed('regionTheme.values.@each.value', 'regionTheme.values.@each.year', 'regionTheme.title', function() {
    if( this.get('regionTheme') && this.get('regionTheme.values') ){
      return [{
        type: 'pie',
        name: this.get('regionTheme.title'),
        data: this.get('regionTheme.values').map(
          (value) => [value.get('year'), value.get('value')]
        )
      }];
    } else {
      return [{
        type: 'pie',
        name: this.get('title'),
        data: [["≤4", 1], ["5-13", 2], ["14-17", 3], ["18-24", 4], ["25-44", 5], ["45-64", 6], ["≥65", 7]]
      }];
    }
  }),
  computedChartData: Ember.computed(function() {
    return [
      {
        type: 'pie',
        name: this.get('title'),
        data: this.get('chartData')
      }
    ];
  })

});
