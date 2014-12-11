import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    page: { refreshModel: true },
    name: { refreshModel: true },
    fuzziness: { refreshModel: true },
    phonetics: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var countries,
        sources,
        fuzziness,
        phonetics,
        phoneticsField = this.controller.get('phoneticsField'),
        fuzzinessField =  this.controller.get('fuzzinessField'),
        countriesField = this.controller.get('countriesField'),
        sourcesField = this.controller.get('sourcesField');

      if (phoneticsField){
        phonetics = phoneticsField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('phonetics', phonetics);

      if (fuzzinessField) {
        fuzziness = fuzzinessField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('fuzziness', fuzziness);

      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('countries', countries);

      if (sourcesField) {
        sources = sourcesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('sources', sources);

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('name', this.controller.get('nameField'));

      this.controller.set('page', (page || 1));
    }
  }
});
