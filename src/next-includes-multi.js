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
