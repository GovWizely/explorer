import DS from 'ember-data';
import ENV from 'explorer/config/environment';

export default DS.RESTAdapter.extend({

  find: function() {
    throw new Error("find() not implemented.");
  },
  createRecord: function() {
    throw new Error("createRecord() not implemented.");
  },
  updateRecord: function() {
    throw new Error("updateRecord() not implemented.");
  },
  deleteRecord: function() {
    throw new Error("deleteRecord() not implemented.");
  },

  findAll: function() {
    var all = this.ajax(ENV.webservicesBaseURL + '/consolidated_screening_list/search', 'GET');
    return all;
  },
  findQuery: function(store, type, query) {
    var page = (query.page > 1) ? query.page : 1;
    var offset = 10 * (page - 1);
    var params = ['offset='+offset];
    var key, url;

    for (key in query) {
      if (query[key] && query[key] !== 'undefined') {
        params.push(key+'='+query[key]);
      }
    }

    url = ENV.webservicesBaseURL + '/consolidated_screening_list/search?' + params.join('&');

    return this.ajax(url, 'GET');
  },
});