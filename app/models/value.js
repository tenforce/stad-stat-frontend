import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  regionTheme: DS.belongsTo('region-theme', { inverse: 'values' })
});
