import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  values: DS.hasMany('value', { inverse: 'regionTheme' }),
  theme: DS.belongsTo('theme', { inverse: 'regionThemes' }),
  region: DS.belongsTo('region', { inverse: 'regionThemes' })
});
