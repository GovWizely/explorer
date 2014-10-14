import {
  moduleFor,
  test
} from 'ember-qunit';
import ENV from 'explorer/config/environment';

moduleFor('adapter:application', 'ApplicationAdapter');

test('it exists', function() {
  var adapter = this.subject();
  ok(adapter);
});

test('buildUrl: query arguments', function() {
  var adapter = this.subject(),
    type = 'explorer@model:consolidated-screening-list-entry:';
  equal(
    adapter.buildUrl(type, {}),
    ENV.webservicesBaseURL + '/consolidated_screening_list/search'
  );

  equal(
    adapter.buildUrl(type, {page: 2}),
    ENV.webservicesBaseURL + '/consolidated_screening_list/search?offset=10'
  );
});

test('buildUrl: supported model types', function() {
  var adapter = this.subject(),
    type = 'explorer@model:parature-faq-entry:';
  equal(
    adapter.buildUrl(type, {}),
    ENV.webservicesBaseURL + '/parature_faq/search'
  );

  throws(
    function() {
      adapter.buildUrl('foo-bar', {});
    },
    new Error('Type "foo-bar" not supported')
  );
});
