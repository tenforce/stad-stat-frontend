import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  regionThemes: DS.hasMany('region-theme', {inverse: 'regions'})
});
