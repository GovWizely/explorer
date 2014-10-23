import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('consolidated-tariff-rate-entry', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      page: p.page
    });
  }
});
