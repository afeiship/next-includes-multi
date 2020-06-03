/*!
 * name: @feizheng/next-includes-multi
 * description: Check if string includes multiple for next.
 * homepage: https://github.com/afeiship/next-includes-multi
 * version: 1.0.1
 * date: 2020-06-03T10:11:56.517Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = {
    target: [],
    aor: false
  }

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

//# sourceMappingURL=next-includes-multi.js.map
