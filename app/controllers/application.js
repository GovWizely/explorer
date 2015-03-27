import Ember from 'ember';
import ENV from 'explorer/config/environment';

export default Ember.Controller.extend({
  title: ENV.appTitle,
  showCcg: false,
  showCcgReport: false,
  developerportalUrl: ENV.developerportalUrl,
  apiKeyUrl: ENV.apiKeyUrl
});
