import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  topics: DS.hasMany('topic'),
  regionThemes: DS.hasMany('region-theme', { inverse: 'theme' })
});
