import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['line-chart chart'],

  title: "Test line chart",
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  yTitle: false,
  chartData:
    [
      {
        name: 'Diefstal',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      },
      {
        name: 'Brandstichting',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      },
      {
        name: 'Vandalisme',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      },
      {
        name: 'Openbaar Dronkenschap',
        data: [22.3, 18.2, 15.7, 13.5, 11.9, 15.2, 17.0, 16.6, 14.2, 14.3, 18.6, 24.1]
      }
    ],
  chartOptions: Ember.computed(function() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: this.get('title')
      },
      xAxis: {
        categories: this.get('categories')
      },
      yAxis: {
        title: {
          text: this.get('yTitle')
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: '#808080'
          }
        ]
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>'
      }
    };
  })
});
