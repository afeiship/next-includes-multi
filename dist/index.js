/*!
 * name: @jswork/next-includes-multi
 * description: Check if string includes multiple for next.
 * homepage: https://github.com/afeiship/next-includes-multi
 * version: 1.0.0
 * date: 2020-11-20 13:25:28
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { target: [], aor: false };

  nx.includesMulti = function (inString, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var action = options.aor ? 'every' : 'some';
    return options.target[action](function (item) {
      return inString.includes(item);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.includesMulti;
  }
})();
