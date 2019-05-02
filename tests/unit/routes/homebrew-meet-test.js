import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | homebrew-meet', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:homebrew-meet');
    assert.ok(route);
  });
});
