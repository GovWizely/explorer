import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;

    return this.store.find('ita-office-location', {
      q: p.q,
<<<<<<< HEAD
      countries: p.countries,
=======
      country: p.country,
>>>>>>> d0bc1855e8385ddfebc0c028fc517f36566af223
      page: p.page
    });
  }
});
