import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  themes: DS.hasMany('theme', { inverse: 'topics'})
});
