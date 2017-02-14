import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chart-zoomed-value', 'Integration | Component | chart zoomed value', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chart-zoomed-value}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chart-zoomed-value}}
      template block text
    {{/chart-zoomed-value}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
