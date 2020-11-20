(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.includesMulti', function () {
      var abc = 'abcdef';
      var target = ['a', 'b', 'ddd'];
      expect(nx.includesMulti(abc, { target, aor: true })).toBe(false);
      expect(nx.includesMulti(abc, { target, aor: false })).toBe(true);
    });
  });
})();
