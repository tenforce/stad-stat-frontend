import { moduleForModel, test } from 'ember-qunit';

moduleForModel('theme', 'Unit | Model | theme', {
  // Specify the other units that are required for this test.
  needs: ['model:topic', 'model:region-theme']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
