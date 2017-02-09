import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  values: DS.hasMany('value')
});
