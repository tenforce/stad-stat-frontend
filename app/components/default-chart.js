import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  chartType: 'pie',
  classNames: ['pie-chart chart'],
  legend: true,

  title: "Test pie chart",
  chartOptions: Ember.computed('regionTheme.title','legend', function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      legend: {
        enabled: this.get('legend')
      },
      title: {
        text: this.get('regionTheme.title')
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      }
    };
  }),
  chartData: Ember.computed('regionTheme.values.@each.value', 'regionTheme.values.@each.year', 'regionTheme.title', 'chartType', function() {
    if( this.get('regionTheme') && this.get('regionTheme.values') ){
      return [{
        type: this.get('chartType'),
        animation: true,
        name: this.get('regionTheme.title'),
        data: this.get('regionTheme.values').map(
          (value) => [value.get('year'), value.get('value')]
        )
      }];
    } else {
      return [{
        type: this.get('chartType'),
        animation: true,
        name: this.get('title'),
        data: [["≤4", 1], ["5-13", 2], ["14-17", 3], ["18-24", 4], ["25-44", 5], ["45-64", 6], ["≥65", 7]]
      }];
    }
  }),
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
