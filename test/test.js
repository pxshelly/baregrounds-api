const chai = require('chai');
const { assert } = chai;
const { sanitizeRecommendation } = require('../server/utils');
const axios = require('axios');

describe('Unit: sanitizeRecommendation', function() {
  it('returns an object that filters out any unrequired fields', function() {
    const recommendation = {
      item: 'trash',
      bin: 'trash',
      item_id: 500,
      trees: 'redwood'
    };
    const method = 'POST';
    const expected = {
      item: 'trash',
      bin: 'trash',
      item_id: 500,
      method: 'POST'
    }
    assert.deepEqual(sanitizeRecommendation(recommendation, method), expected);
  });
  it('returns null if the recommendation is missing any required fields', function() {
    const recommendation = {
      item: 'trash',
    };
    const method = 'POST';
    const expected = null;
    assert.strictEqual(sanitizeRecommendation(recommendation, method), expected);
  });
  it('returns null if the function receives invalid input', function() {
    const actualArray = ['sf', 'southbay', 'sac'];
    const actualObject = {
      city1: 'sac',
      city2: 'sf',
      city3: 'chi'
    };
    const methodNum = 555;
    const methodStr = 'PALOOZA';
    const expected = null;
    assert.strictEqual(sanitizeRecommendation(actualArray, methodStr), expected);
    assert.strictEqual(sanitizeRecommendation(actualObject, methodNum), expected);
    assert.strictEqual(sanitizeRecommendation(actualObject, methodStr), expected);
  });
})

describe('system: get /recyclables', function() {
  it('returns a list of items if a search term exists in the database', function() {
    return axios.get('http://localhost:3000/recyclables/paper')
      .then((results) => {
        assert.isArray(results.data);
      });
  });
});

describe('system: post /recommendations', function() {
  it('returns 201 status code when it posts a valid object', function() {
    const rec = {
      item: 'fries',
      bin: 'compost',
      method: 'POST'
    }
    return axios.post('http://localhost:3000/recommendations', rec)
      .then((results) => assert.strictEqual(results.status, 201));
  });
  it('returns 400 status code if an invalid object is posted', function() {
    const rec = 'not an object';
    return axios.post('http://localhost:3000/recommendations', rec)
      .catch((error) => assert.strictEqual(error.response.status, 400));
  })
});

