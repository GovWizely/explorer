import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:consolidated-tariff-rate-entries/index', 'ConsolidatedTariffRateEntriesIndexController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['controller:consolidated-tariff-rate-entries']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
