const nx = require('@feizheng/next-js-core2');
require('../src/next-includes-multi');

describe('api.basic test', () => {
  test('nx.includesMulti', function () {
    var abc = 'abcdef';
    var target = ['a', 'b', 'ddd'];
    expect(nx.includesMulti(abc, { target, andOr: true })).toBe(false);
    expect(nx.includesMulti(abc, { target, andOr: false })).toBe(true);
  });
});
