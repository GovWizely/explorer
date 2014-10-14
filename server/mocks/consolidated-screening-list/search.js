module.exports = function(app) {
  var express = require('express');
  var consolidatedScreeningListSearchRouter = express.Router();
  consolidatedScreeningListSearchRouter.get('/', function(req, res) {
    var fixtures = [
      { id: 1, name: 'Mr Foo', source: 'SDN' },
      { id: 2, name: 'Mrs Bar', source: 'FSE' }
    ];

    var results = fixtures;
    if (req.query.q) {
      results = fixtures.filter(function(fixture) {
        return (fixture['name'].search(req.query.q) !== -1);
      });
    }

    res.send({
      total: results.length,
      offset: 0,
      results: results
    });
  });
  app.use('/api/consolidated_screening_list/search', consolidatedScreeningListSearchRouter);
};
