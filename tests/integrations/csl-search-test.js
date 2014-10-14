import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - CSL Search', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("an empty search finds all fixtures", function() {
  visit('/');
  andThen(function() {
    equal(find('#search-results h3').length, 2);
  });
  fillIn('#q-input', 'Foo');
  click('#search-button');
  andThen(function() {
    equal(find('#search-results h3').length, 1);
  });
  fillIn('#q-input', '');
  click('#search-button');
  andThen(function() {
    equal(find('#search-results h3').length, 2);
  });
});
