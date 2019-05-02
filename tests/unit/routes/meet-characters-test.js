import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | meet-characters', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:meet-characters');
    assert.ok(route);
  });
});
