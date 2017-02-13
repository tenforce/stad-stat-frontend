import { moduleForModel, test } from 'ember-qunit';

moduleForModel('region-theme', 'Unit | Model | region theme', {
  // Specify the other units that are required for this test.
  needs: ['model:value', 'model:theme', 'model:region']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
