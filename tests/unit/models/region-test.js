import { moduleForModel, test } from 'ember-qunit';

moduleForModel('region', 'Unit | Model | region', {
  // Specify the other units that are required for this test.
  needs: ['model:region-theme']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
