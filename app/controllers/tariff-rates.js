import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'sources', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  sources: null,
  sourcesField: function() {
    var sources = String(this.get('sources')).split(',');
    var selected = this.get('sourceList').filter(function(item) {
      return sources.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('sources'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  sourceList: [
    {value: 'AUSTRALIA', label: 'FTA Australia Tariff Rates'},
    {value: 'CHILE', label: 'FTA Chile Tariff Rates'},
    {value: 'BAHRAIN', label: 'FTA Bahrain Tariff Rates'},
    {value: 'COLOMBIA', label: 'FTA Colombia Tariff Rates'},
    {value: 'COSTA_RICA', label: 'FTA Costa Rica Tariff Rates'},
    {value: 'DOMINICAN_REPUBLIC', label: 'FTA Dominican Republic Tariff Rates'},
    {value: 'EL_SALVADOR', label: 'FTA El Salvador Tariff Rates'},
    {value: 'GUATEMALA', label: 'FTA Guatemala Tariff Rates'},
    {value: 'HONDURAS', label: 'FTA Honduras Tariff Rates'},
    {value: 'MOROCCO', label: 'FTA Morocco Tariff Rates'},
    {value: 'NICARAGUA', label: 'FTA Nicaragua Tariff Rates'},
    {value: 'OMAN', label: 'FTA Oman Tariff Rates'},
    {value: 'PANAMA', label: 'FTA Panama Tariff Rates'},
    {value: 'PERU', label: 'FTA Peru Tariff Rates'},
    {value: 'SINGAPORE', label: 'FTA Singapore Tariff Rates'},
    {value: 'SOUTH_KOREA', label: 'FTA South Korea Tariff Rates'}
  ],
});
