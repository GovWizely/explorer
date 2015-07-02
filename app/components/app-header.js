import Ember from 'ember';
import ENV from 'explorer/config/environment';

export default Ember.Component.extend({
  developerportalUrl: ENV.developerportalUrl,
  apiKeyUrl: ENV.apiKeyUrl,
  availableApisNavItems: [
      { text: 'Market Research Library', path:     'market-research-library.html' },
      { text: 'Consolidated Screening List', path: 'consolidated-screening-list.html' },
      { text: 'Trade Events', path:                'trade-events.html' },
      { text: 'Trade Leads', path:                 'trade-leads.html' },
      { text: 'Tariff Rates', path:                'tariff-rates.html' },
      { text: 'FAQs on Exporting', path:           'faqs-exporting.html' },
      { text: 'List of all APIs', path:            'api-list.html' }
    ]
});
