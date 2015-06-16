import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('eccn-entry', {
      q: p.q,
      description: p.description
    });
  }
});
