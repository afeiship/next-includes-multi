# next-includes-multi
> Check if string includes multiple for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-includes-multi
```

## usage
```js
import '@jswork/next-includes-multi';

const abc = 'abcdef';
const target = ['a', 'b', 'ddd'];

nx.includesMulti(abc, { target, aor: true });
nx.includesMulti(abc, { target });

//some: false
//every: true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-includes-multi/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-includes-multi
[version-url]: https://npmjs.org/package/@jswork/next-includes-multi

[license-image]: https://img.shields.io/npm/l/@jswork/next-includes-multi
[license-url]: https://github.com/afeiship/next-includes-multi/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-includes-multi
[size-url]: https://github.com/afeiship/next-includes-multi/blob/master/dist/next-includes-multi.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-includes-multi
[download-url]: https://www.npmjs.com/package/@jswork/next-includes-multi
