import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('consolidated-screening-list-entry', {
      q: p.q,
      countries: p.countries,
      sources: p.sources,
      sdn_type: p.sdnType,
      page: p.page
    });
  }
});
