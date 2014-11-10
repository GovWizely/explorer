import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: { refreshModel: true },
<<<<<<< HEAD
    countries: { refreshModel: true },
=======
    country: { refreshModel: true },
>>>>>>> d0bc1855e8385ddfebc0c028fc517f36566af223
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
<<<<<<< HEAD
      var countries,
        countriesField = this.controller.get('countriesField');

      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('countries', countries);
=======
      var country,
        countryField = this.controller.get('countryField');

      if (countryField) {
        country = countryField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('country', country);
>>>>>>> d0bc1855e8385ddfebc0c028fc517f36566af223

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});
