/*!
 * name: @feizheng/next-includes-multi
 * description: Check if string includes multiple for next.
 * homepage: https://github.com/afeiship/next-includes-multi
 * version: 1.0.0
 * date: 2020-06-03T10:04:20.975Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = {
    target: [],
    andOr: false
  }

  nx.includesMulti = function (inString, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var action = options.andOr ? 'every' : 'some';
    return options.target[action](function (item) {
      return inString.includes(item);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.includesMulti;
  }
})();

//# sourceMappingURL=next-includes-multi.js.map
